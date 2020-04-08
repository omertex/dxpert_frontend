import React, { useEffect } from "react";
import ShortInfo from "../../shared-components/ShortInfo";
import PageLayout from "../../shared-components/PageLayout/PageLayout";
import EmployerContacts from "../../shared-components/ProfileInfo/EmployerContacts";
import PageName from "../../shared-components/PageName";
import { connect } from "react-redux";
import * as ACTIONS from "../../store/actions";
import {
  setEmployerProfile,
  updateEmployerProfile,
} from "../../store/sagas/requests";
import { getEmployerProfile } from "../../store/actions/employerProfile";

const EmployerProfile = (props) => {
  const getProfile = () => {
    props
      .getEmployerProfile("dxpert10g5v4pqrvtqxtappx553u7gg2qafajtn4zdgyy")
      .then((response) => console.log(response));
  };

  const updateProfile = () => {
    updateEmployerProfile({
      address: "dxpert10g5v4pqrvtqxtappx553u7gg2qafajtn4zdgyy",
      about: "IT Software & Services",
      city: "Shanghai1",
      country: "China1",
      email: "tencentholdings@jobs.com",
      organisation: "Tencent Holdings",
      website: "tencentholdings.com",
    }).then((response) => console.log(response));
  };

  // установить профиль (только для новых профилей)
  const setProfile = (props) => {
    console.log("setProfile");
    setEmployerProfile({
      address: "dxpert10g5v4pqrvtqxtappx553u7gg2qafajtn4zdgyy",
      about: "IT Software & Services",
      city: "Shanghai",
      country: "China",
      email: "tencentholdings@jobs.com",
      organisation: "Tencent Holdings",
      website: "tencentholdings.com",
    }).then((response) => console.log(response));
  };

  return (
    <PageLayout>
      <ShortInfo address={props.address} />
      <PageName pageName={"My profile"} onLogOut={props.logout} />
      <button onClick={getProfile}>getProfile</button>
      <button onClick={updateProfile}>updateProfile</button>
      <button onClick={setProfile}>setProfile</button>
      <EmployerContacts />
    </PageLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployerProfile: () => dispatch(getEmployerProfile()),
    logout: () => dispatch(ACTIONS.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerProfile);
