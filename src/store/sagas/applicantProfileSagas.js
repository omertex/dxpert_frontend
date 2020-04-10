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
import differenceInMonths from "date-fns/differenceInMonths";
import { parseISO } from "date-fns";

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

  console.log("data", publicData, privateData);

  const profile = {
    details: {
      avatar: publicData.photo || "",
      name: decryptByPrivateKey(privateKey, privateData.name) || "",
    },
    aboutMe: decryptByPrivateKey(privateKey, privateData.about) || "",
    contacts: {
      country: publicData.country || "",
      city: publicData.city || "",
      sex: publicData.sex || "",
      DOB: publicData.birth_date || "",
      email: decryptByPrivateKey(privateKey, privateData.email) || "",
    },
    workExperience:
      mapCrypto({
        data: privateData.experience,
        cryptoKey: privateKey,
        cryptoFunction: decryptByPrivateKey,
      }) || [],
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

  const totalExperience = applicant.workExperience.reduce(
    (accumulator, item) => {
      return (
        accumulator + differenceInMonths(parseISO(item.to), parseISO(item.from))
      );
    },
    0
  );

  const data = {
    type: "dxpert/UploadResume",
    value: {
      resume: {
        public_data: {
          skills: JSON.stringify(applicant.skills),
          country: applicant.contacts.country,
          city: applicant.contacts.city,
          languages: JSON.stringify(applicant.languages),
          total_experience: JSON.stringify(totalExperience),
          education: JSON.stringify(applicant.education),
          birth_date: applicant.contacts.DOB,
          sex: applicant.contacts.sex,
          photo: applicant.details.avatar,
        },
        private_data: {
          name: encryptByPublicKey(auth.publicKey, applicant.details.name),
          experience: JSON.stringify(
            mapCrypto({
              data: applicant.workExperience,
              cryptoKey: auth.publicKey,
              cryptoFunction: encryptByPublicKey,
            })
          ),
          email: encryptByPublicKey(auth.publicKey, applicant.contacts.email),
          about: encryptByPublicKey(auth.publicKey, applicant.aboutMe),
        },
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

  const wallet = {
    address: auth.address,
    privateKey: auth.privateKey,
    publicKey: auth.publicKey,
  };

  const accountMeta = {
    account_number: auth.account_number,
    sequence: auth.sequence,
  };

  console.log("data", data);

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
