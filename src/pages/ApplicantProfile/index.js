import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProfileDetails from "../../components/profile/ProfileDetails/ProfileDetails";
import PageLoading from "../../shared-components/PageLoading";
import PageName from "../../shared-components/PageName";
import AboutMe from "../../shared-components/ProfileInfo/AboutMe";
import ApplicantContacts from "../../shared-components/ProfileInfo/ApplicantContacts";
import Education from "../../shared-components/ProfileInfo/Education";
import Languages from "../../shared-components/ProfileInfo/Languages";
import Skills from "../../shared-components/ProfileInfo/Skills";
import WorkExperience from "../../shared-components/ProfileInfo/WorkExperience";
import ShortInfo from "../../shared-components/ShortInfo";
import * as ACTIONS from "../../store/actions";
import {
  getApplicantProfile,
  sendApplicantProfile,
  setDetails,
} from "../../store/actions/applicantProfile";
import * as Styled from "./styled";

const ApplicantProfile = ({
  address,
  getApplicantProfile,
  applicant,
  setDetails,
  sendApplicantProfile,
  logout,
  avatar,
  name,
}) => {
  useEffect(() => {
    getApplicantProfile(address);
  }, [getApplicantProfile, address]);

  // должнен быть хотя бы один навык, указан пол, хотя бы один язык, дата рождения
  // если есть образование, то должно быть указано место
  // это в публичных данных
  // в приватных данных обязательное имя, если есть опыт, то в нём все поля обязательные
  // страна

  return (
    <Styled.Container>
      <ShortInfo avatar={avatar} name={name} address={address} />
      <PageName pageName={"My profile"} onLogOut={logout} />
      {applicant.isApplicantProfileLoaded ? (
        <>
          <ProfileDetails
            details={applicant.details}
            setDetails={setDetails}
            sendApplicantProfile={sendApplicantProfile}
          />
          <ApplicantContacts sendApplicantProfile={sendApplicantProfile} />
          <AboutMe sendApplicantProfile={sendApplicantProfile} />
          <Skills sendApplicantProfile={sendApplicantProfile} />
          <Languages sendApplicantProfile={sendApplicantProfile} />
          <WorkExperience sendApplicantProfile={sendApplicantProfile} />
          <Education sendApplicantProfile={sendApplicantProfile} />
        </>
      ) : (
        <PageLoading />
      )}
    </Styled.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
    applicant: state.applicant,
    avatar: state.applicant.details.avatar,
    name: state.applicant.details.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccountInfo: (info) => dispatch(ACTIONS.updateAccountInfo(info)),
    createNewWallet: () => dispatch(ACTIONS.createNewWallet()),
    logout: () => dispatch(ACTIONS.logout()),
    getApplicantProfile: (address) => dispatch(getApplicantProfile(address)),
    setDetails: (details) => dispatch(setDetails(details)),
    sendApplicantProfile: () => dispatch(sendApplicantProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantProfile);
