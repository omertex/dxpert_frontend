import React, { useEffect } from "react";
import { connect } from "react-redux";
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
  setDetails,
  sendApplicantProfile,
} from "../../store/actions/applicantProfile";
import * as Styled from "./styled";
import ProfileDetails from "../../components/profile/ProfileDetails/ProfileDetails";
import PageLoading from "../../shared-components/PageLoading";

const Profile = ({
  address,
  createNewWallet,
  updateAccountInfo,
  privateKey,
  publicKey,
  account_number,
  sequence,
  getApplicantProfile,
  applicant,
  setDetails,
  sendApplicantProfile,
  logout,
}) => {
  useEffect(() => {
    getApplicantProfile(address);
  }, [getApplicantProfile, address]);

  return (
    <Styled.Container>
      <ShortInfo address={address} />
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
          {/* <button onClick={sendApplicantProfile}>Save in blockchain</button> */}
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
    privateKey: state.auth.privateKey,
    publicKey: state.auth.publicKey,
    account_number: state.auth.account_number,
    sequence: state.auth.sequence,
    applicant: state.applicant,
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
