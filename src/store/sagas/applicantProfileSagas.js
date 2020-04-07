import {
  getApplicantProfile,
  sendTransaction,
  getAccountInfo,
} from "./requests";
import { takeLatest, put, select } from "redux-saga/effects";
import { AUTH, APPLICANT_PROFILE } from "../actions/actionTypes";
import {
  encryptByPublicKey,
  decryptByPrivateKey,
  mapCrypto,
} from "../../configuration/helpers";
import LZString from "lz-string";

function* getApplicantProfileSaga({ payload }) {
  const privateKey = yield select((state) => state.auth.privateKey);

  const {
    public_data: publicData,
    private_data: privateData,
  } = yield getApplicantProfile(payload);

  if (!publicData || !privateData) {
    yield put({
      type: APPLICANT_PROFILE.SET_IS_PROFILE_LOADED,
      payload: true,
    });
    return;
  }

  const profile = {
    details: {
      // avatar: LZString.decompress(publicData.photo) || "",
      avatar: publicData.photo || "",
      // name: decryptByPrivateKey(privateKey, privateData.name) || "",
      name: privateData.name || "",

      // mapCrypto({
      //   data: privateData.name,
      //   key: privateKey,
      //   cryptoFunction: decryptByPrivateKey,
      // }) || "",
    },
    aboutMe: privateData.about || "",
    contacts: {
      country: publicData.country || "",
      city: publicData.city || "",
      sex: publicData.sex || "",
      DOB: publicData.birth_date || "",
      email: privateData.email || "",
    },
    // workExperience: decryptByPrivateKey(privateKey, privateData.experience) || [],
    workExperience: privateData.experience || [],
    education: publicData.education || [],
    skills: publicData.skills || [],
    languages: publicData.languages || [],
  };
  yield put({
    type: APPLICANT_PROFILE.SET_PROFILE,
    payload: profile,
  });
  yield put({
    type: APPLICANT_PROFILE.SET_IS_PROFILE_LOADED,
    payload: true,
  });
}

export function* getApplicantProfileWatcher() {
  yield takeLatest(
    APPLICANT_PROFILE.GET_APPLICANT_PROFILE,
    getApplicantProfileSaga
  );
}

function* sendApplicantProfileSaga() {
  const auth = yield select((state) => state.auth);
  const applicant = yield select((state) => state.applicant);

  const publicData = {
    skills: applicant.skills.length ? applicant.skills : null,
    country: applicant.contacts.country,
    city: applicant.contacts.city,
    languages: applicant.languages.length ? applicant.languages : null,
    total_experience: 0,
    education: applicant.education.length ? applicant.education : null,
    birth_date: applicant.contacts.DOB
      ? new Date(applicant.contacts.DOB).toISOString()
      : "",
    sex: applicant.contacts.sex,
    // photo: LZString.compress(applicant.details.avatar),
    // photo: applicant.details.avatar,
    photo: "null",
  };
  const privateData = {
    // name: encryptByPublicKey(auth.publicKey, applicant.details.name),
    name: applicant.details.name,
    // mapCrypto({
    //   data: applicant.details.name,
    //   key: auth.publicKey,
    //   cryptoFunction: encryptByPublicKey,
    // }),
    experience: applicant.workExperience.length
      ? applicant.workExperience
      : null,
    email: applicant.contacts.email,
    about: applicant.aboutMe,
  };

  const totalExperience = 7;

  const data = {
    type: "dxpert/UploadResume",
    value: {
      resume: {
        public_data: {
          skills: applicant.skills.length ? applicant.skills : null,
          country: applicant.contacts.country,
          city: applicant.contacts.city,
          languages: applicant.languages.length ? applicant.languages : null,
          total_experience: totalExperience,
          education: applicant.education.length ? applicant.education : null,
          birth_date: applicant.contacts.DOB ? applicant.contacts.DOB : "",
          sex: applicant.contacts.sex || "",
          photo: "null",
        },
        private_data: {
          name: applicant.details.name,
          experience: applicant.workExperience.length
            ? applicant.workExperience
            : null,
          email: "email",
          about: "",
        },
        suggested_price: [
          {
            denom: "coin",
            amount: "1",
          },
        ],
      },
      // resume: fakeResume,
      address: auth.address,
    },
  };

  // const data = {
  //   type: "dxpert/UploadResume",
  //   value: {
  //     resume: {
  //       public_data: publicData,
  //       private_data: privateData,
  //       suggested_price: [
  //         {
  //           denom: "coin",
  //           amount: "1",
  //         },
  //       ],
  //     },
  //     address: auth.address,
  //   },
  // };

  console.log("data", JSON.stringify(data));

  const wallet = {
    address: auth.address,
    privateKey: auth.privateKey,
    publicKey: auth.publicKey,
  };

  const accountMeta = {
    account_number: auth.account_number,
    sequence: auth.sequence,
  };

  console.log(wallet, accountMeta);

  const transactionResult = yield sendTransaction(data, wallet, accountMeta);
  console.log("transactionResult", transactionResult);

  const accountInfoResult = yield getAccountInfo(auth.address);

  yield put({
    type: AUTH.SET_TRANSACTION_INFO,
    payload: accountInfoResult,
  });
}

export function* sendApplicantProfileWatcher() {
  yield takeLatest(
    APPLICANT_PROFILE.SEND_APPLICANT_PROFILE,
    sendApplicantProfileSaga
  );
}
