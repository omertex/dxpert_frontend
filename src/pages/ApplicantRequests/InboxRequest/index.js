import React, { memo, useState } from "react";
import * as Styled from "./styled";
import { Transition } from "react-transition-group";
import { SubmitBtn } from "../../../shared-components/Buttons";
import { DeclineBtn } from "../../../shared-components/Buttons";

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

export default memo(
  ({ status, company, skills, time, allowSend, declineSend }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleSkillsExpanded = () => setExpanded(!isExpanded);

    return (
      <Styled.Request>
        <Styled.Company>{company}</Styled.Company>
        <Transition in={isExpanded} timeout={200}>
          {(state) => (
            <Styled.Skills
              style={{
                ...defaultSkills,
                ...transitionSkills[state],
              }}
            >
              {skills}
            </Styled.Skills>
          )}
        </Transition>
        <Styled.Expand onClick={toggleSkillsExpanded} expanded={isExpanded} />
        <Styled.Time>{time}</Styled.Time>
        <Styled.Buttons>
          <DeclineBtn text="decline" width="100px" clicked={declineSend} />
          <SubmitBtn text="allow" width="100px" clicked={allowSend} />
        </Styled.Buttons>
      </Styled.Request>
    );
  }
);
