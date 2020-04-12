import React from "react";
import { connect } from "react-redux";
import ApplicantRequests from "../ApplicantRequests";
import EmployerRequests from "../EmployerRequests";

const Requests = ({ chosenWay }) => {
  if (chosenWay === "applicant") return <ApplicantRequests />;
  if (chosenWay === "employer") return <EmployerRequests />;
};

const mapStateToProps = (state) => {
  return {
    chosenWay: state.auth.chosenWay,
  };
};

export default connect(mapStateToProps)(Requests);
