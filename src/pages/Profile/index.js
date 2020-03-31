import React, { useEffect } from "react";
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
import { getResume, sendTransaction } from "../../configuration/Requests";
import * as ACTIONS from "../../store/actions";

const Profile = ({
  address,
  createNewWallet,
  updateAccountInfo,
  privateKey,
  publicKey,
  account_number,
  sequence,
}) => {
  useEffect(() => {
    getResume(address).then((result) => console.log(result));
  }, []);

  const logOut = () => {
    localStorage.removeItem("dxpert_private_key");
    localStorage.removeItem("dxpert_public_key");
    localStorage.removeItem("dxpert_address");
    createNewWallet();
  };

  // рабочая функция обновления резюме и информации аккаунта
  // const updateResume = () => {
  //   sendTransaction(
  //     data,
  //     { address, privateKey, publicKey },
  //     { account_number, sequence }
  //   ).then((result) => {
  //     updateAccountInfo(result.accountInfo);
  //   });
  // };

  return (
    <Styled.Container>
      <ShortInfo address={address} />
      <PageName pageName={"My profile"} onLogOut={logOut} />
      <ApplicantContacts />
      <AboutMe />
      <Skills />
      <Languages />
      <WorkExperience />
      <Education />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccountInfo: (info) => dispatch(ACTIONS.updateAccountInfo(info)),
    createNewWallet: () => dispatch(ACTIONS.createNewWallet()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
