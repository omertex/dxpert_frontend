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

function* getApplicantProfileSaga({ payload }) {
  const privateKey = yield select((state) => state.auth.privateKey);

  const {
    public_data: publicData,
    private_data: privateData,
  } = yield getApplicantProfile(payload);
  const profile = {
    details: {
      avatar: privateData.photo || "",
      name:
        mapCrypto({
          data: privateData.name,
          key: privateKey,
          cryptoFunction: decryptByPrivateKey,
        }) || "",
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
    skills: applicant.skills,
    country: applicant.contacts.country,
    city: applicant.contacts.city,
    languages: applicant.languages,
    experince: 999,
    education: applicant.education,
    birth_date: applicant.contacts.DOB,
    sex: applicant.contacts.sex,
  };
  const privateData = {
    name: mapCrypto({
      data: applicant.details.name,
      key: auth.publicKey,
      cryptoFunction: encryptByPublicKey,
    }),
    experience: applicant.workExperience,
    photo: applicant.details.avatar,
    email: applicant.contacts.email,
    about: applicant.aboutMe,
  };

  const data = {
    type: "dxpert/UploadResume",
    value: {
      resume: {
        public_data: publicData,
        private_data: privateData,
        suggested_price: [
          {
            denom: "coin",
            amount: "1",
          },
        ],
      },
      address: auth.address,
    },
  };

  const transactionResult = yield sendTransaction(
    data,
    {
      address: auth.address,
      privateKey: auth.privateKey,
      publicKey: auth.publicKey,
    },
    { account_number: auth.account_number, sequence: auth.sequence }
  );

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
