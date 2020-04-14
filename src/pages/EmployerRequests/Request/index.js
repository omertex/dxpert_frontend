import React, { useState } from "react";
import * as Styled from "./styled";
import { Transition } from "react-transition-group";
import { withRouter } from "react-router-dom";

const defaultSkills = {
  height: 36,
  overflow: "hidden",
  transition: "all 200ms ease-in",
};
const transitionSkills = {
  entering: { height: 36 },
  entered: { height: "auto" },
  exiting: { height: "auto" },
  exited: { height: 36 },
};

export default withRouter(
  ({ status, walletID, gender, age, skills, time, disabled, history }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleSkillsExpanded = () => setExpanded(!isExpanded);
    const openProfile = (walletID) => {
      history.push(`/opened-resume/${walletID}`);
    };

    return (
      <Styled.Request status={status}>
        {status === 0 && <Styled.Pending fontSize="small" />}
        {status === 1 && <Styled.Completed fontSize="small" />}
        {status === 2 && <Styled.Failed fontSize="small" />}
        <Styled.WalletID>{`${walletID.slice(0, 22)}...`}</Styled.WalletID>
        <Styled.Gender>{gender}</Styled.Gender>
        <Styled.Age>
          {new Date().getFullYear() - new Date(age).getFullYear()}
        </Styled.Age>
        <Transition in={isExpanded} timeout={0}>
          {(state) => (
            <Styled.Skills
              style={{
                ...defaultSkills,
                ...transitionSkills[state],
              }}
            >
              {skills.length ? skills.map((skill) => `${skill}, `) : "Is empty"}
            </Styled.Skills>
          )}
        </Transition>
        <Styled.View
          disabled={disabled}
          onClick={() => {
            openProfile(walletID);
          }}
        >
          view profile
        </Styled.View>
        <Styled.Expand onClick={toggleSkillsExpanded} expanded={isExpanded} />
        <Styled.Time>{new Date(+time).toLocaleDateString()}</Styled.Time>
      </Styled.Request>
    );
  }
);
