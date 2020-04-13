import React from "react";
import { connect } from "react-redux";
import ApplicantProfile from "../ApplicantProfile";
import EmployerProfile from "../EmployerProfile";

const Profile = ({ chosenWay }) => {
  if (chosenWay === "applicant") return <ApplicantProfile />;
  if (chosenWay === "employer") return <EmployerProfile />;
};

const mapStateToProps = (state) => {
  return {
    chosenWay: state.auth.chosenWay,
  };
};

export default connect(mapStateToProps)(Profile);
