import { getApplicantProfile } from "./requests";
import { takeLatest, put, select } from "redux-saga/effects";
import { APPLICANT_PROFILE } from "../actions/actionTypes";

function* getApplicantProfileSaga({ payload }) {
  const {
    public_data: publicData,
    private_data: privateData,
  } = yield getApplicantProfile(payload);
  const profile = {
    aboutMe: "", // missing
    contacts: {
      country: publicData.country || "",
      city: "", // missing
      gender: "", // sex ? number
      DOB: publicData.birth_date || "",
      phoneNumber: "", // missing
    },
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
