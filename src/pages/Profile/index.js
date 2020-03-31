import React from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import PageName from "../../shared-components/PageName";
import ApplicantContacts from "../../shared-components/ProfileInfo/ApplicantContacts";
import AboutMe from "../../shared-components/ProfileInfo/AboutMe";
import Skills from "../../shared-components/ProfileInfo/Skills";
import Languages from "../../shared-components/ProfileInfo/Languages";
import WorkExperience from "../../shared-components/ProfileInfo/WorkExperience";
import Education from "../../shared-components/ProfileInfo/Education";
import { connect } from "react-redux";

const Profile = ({ address }) => (
  <Styled.Container>
    <ShortInfo address={address} />
    <PageName pageName={"My profile"} />
    <ApplicantContacts />
    <AboutMe />
    <Skills />
    <Languages />
    <WorkExperience />
    <Education />
  </Styled.Container>
);

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
  };
};

export default connect(mapStateToProps)(Profile);
