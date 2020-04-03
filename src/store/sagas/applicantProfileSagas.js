import { getApplicantProfile, sendTransaction } from "./requests";
import { takeLatest, put, select } from "redux-saga/effects";
import { APPLICANT_PROFILE } from "../actions/actionTypes";
import {
  encryptByPublicKey,
  decryptByPrivateKey,
} from "../../configuration/helpers";

function* getApplicantProfileSaga({ payload }) {
  const privateKey = yield select((state) => state.auth.privateKey);
  console.log("privateKey", privateKey);
  const {
    public_data: publicData,
    private_data: privateData,
  } = yield getApplicantProfile(payload);
  const profile = {
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

// рабочая функция обновления резюме и информации аккаунта
const sendApplicantProfile = ({
  data,
  address,
  privateKey,
  publicKey,
  account_number,
  sequence,
}) => {
  // sendTransaction(
  //   data,
  //   { address, privateKey, publicKey },
  //   { account_number, sequence }
  // ).then((result) => {
  //   // updateAccountInfo(result.accountInfo);
  // });
};

function* sendApplicantProfileSaga() {
console.log("sendApplicantProfileSaga");

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
    name: applicant.details.name,
    experience: applicant.workExperience,
    photo: applicant.details.avatar,
    email: applicant.contacts.email,
    about: applicant.aboutMe,
  };

  const data = {
    public_data: publicData,
    private_data: privateData,
    suggested_price: [
      {
        denom: "coin",
        amount: "10",
      },
    ],
  };

  sendTransaction(
    data,
    {
      address: auth.address,
      privateKey: auth.privateKey,
      publicKey: auth.publicKey,
    },
    { account_number: auth.account_number, sequence: auth.sequence }
  ).then((result) => {
    console.log("update result", result);
    // updateAccountInfo(result.accountInfo);
  });
}

export function* sendApplicantProfileWatcher() {
  console.log("sendApplicantProfileWatcher");
  yield takeLatest(
    APPLICANT_PROFILE.SEND_APPLICANT_PROFILE,
    sendApplicantProfileSaga
  );
}
