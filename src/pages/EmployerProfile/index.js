import React from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import EmployerContacts from "../../shared-components/ProfileInfo/EmployerContacts";
import PageName from "../../shared-components/PageName";
import { connect } from "react-redux";
import * as ACTIONS from "../../store/actions";

const EmployerProfile = ({ address, logout }) => (
  <Styled.Container>
    <ShortInfo address={address} />
    <PageName pageName={"My profile"} onLogOut={logout} />
    <EmployerContacts />
  </Styled.Container>
);

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(ACTIONS.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerProfile);
