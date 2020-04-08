import CircularProgress from "@material-ui/core/CircularProgress";
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

import { sendTransaction } from "../../store/sagas/requests";
import { encryptByPublicKey } from "../../configuration/helpers";
import { signTransaction } from "../../services/transactions";

const ApplicantProfile = ({
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

  const logOut = () => {
    localStorage.removeItem("dxpert_private_key");
    localStorage.removeItem("dxpert_public_key");
    localStorage.removeItem("dxpert_address");
    createNewWallet();
  };

  const ggwp = () => {
    // const name = encryptByPublicKey(publicKey, "Привет Андрей 11111");
    // const company = encryptByPublicKey(publicKey, "Freelance 123214234");
    // const from = encryptByPublicKey(publicKey, "2020-01-01");
    // const to = encryptByPublicKey(publicKey, "2020-04-01");
    // const Position = encryptByPublicKey(publicKey, "dev");
    // const photo = encryptByPublicKey(publicKey, "null");
    const email = encryptByPublicKey(publicKey, "test@test.test");

    const data = {
      type: "dxpert/UploadResume",
      value: {
        resume: {
          public_data: {
            skills: ["c++", "go", "best sax player in the world"],
            country: "Belarus",
            city: "Minsk",
            languages: ["English", "Russian", "Ukraine"],
            total_experience: 7,
            education: [
              {
                facility: "BSU",
                level: "Higher education",
                specialization: "Faculty of International Relations",
                from: "2015-09-01T09:00:00Z",
                to: "2019-07-09T01:00:00Z",
              },
            ],
            birth_date: "1996-10-03T00:00:00Z",
            sex: "m",
            photo: "null",
          },
          private_data: {
            name: "Привет Андрей !!!!!!!!!!!!!",
            experience: [
              {
                company: "abirvalg",
                from: "2020-01-01",
                to: "2020-01-01",
                position: "dev",
              },
            ],
            email: email,
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
        address: address,
      },
    };

    // const signedData = signTransaction(data, wallet, accountMeta)

    sendTransaction(
      data,
      {
        privateKey,
        publicKey,
        address,
      },
      {
        account_number,
        sequence,
      }
    ).then((response) => console.log(response));
  };

  // должнен быть хотя бы один навык, указан пол, хотя бы один язык, дата рождения
  // если есть образование, то должно быть указано место
  // это в публичных данных
  // в приватных данных обязательное имя, если есть опыт, то в нём все поля обязательные
  // страна

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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantProfile);
