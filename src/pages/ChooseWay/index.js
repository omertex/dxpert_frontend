import React, { useEffect } from "react";
import {
  ContinueBtn,
  BorderBtn,
  ChooseWayBtn,
} from "../../shared-components/Buttons";
import * as Styled from "./styled";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

function ChooseWay({ history, onChooseWay, chosenWay, isAuth }) {
  useEffect(() => {
    if (isAuth) history.push(`/${chosenWay}/profile`);
  }, [isAuth, chosenWay]);

  return (
    <Styled.Container isWayChosen={chosenWay}>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vivamus
        orci, sed curabitur condimentum ut eget volutpat ornare. Sed
        pellentesque bibendum odio integer elementum quam eget.
      </h3>
      <h4>Choose your way</h4>
      <Styled.RoleWrapper>
        <ChooseWayBtn
          chosen={chosenWay === "applicant"}
          clicked={() => onChooseWay("applicant")}
          text="For applicants"
        />
        <ChooseWayBtn
          chosen={chosenWay === "employer"}
          clicked={() => onChooseWay("employer")}
          text="For employers"
          second={true}
        />
      </Styled.RoleWrapper>
      <Styled.AccountWrapper>
        <Link to="/wallet-creation-tutorial">
          <BorderBtn text="Create account" disabled={!chosenWay} />
        </Link>
        <Link to="/unlock-wallet">
          <ContinueBtn text="Connect account" />
        </Link>
      </Styled.AccountWrapper>
    </Styled.Container>
  );
}

const mapStateToProps = (state) => {
  return {
    chosenWay: state.auth.chosenWay,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChooseWay: (way) => dispatch({ type: actionTypes.AUTH.CHOOSE_WAY, way }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChooseWay));
