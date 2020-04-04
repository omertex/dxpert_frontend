import React, {useState} from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { MultiSelect } from "../../MultiSelect";
import { SKILLS } from "../../../configuration/TemporaryConsts";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

const Editable = ({ value, changed, submitted }) => (
  <Styled.Form>
    <MultiSelect
      data={SKILLS}
      value={value}
      placeholder="Enter skill"
      width="431px"
      onChange={changed}
    />
    <Styled.SubmitBox>
      <SubmitBtn text="submit" clicked={submitted} />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Skills = ({ skills, setSkills, sendApplicantProfile }) => {
  const [skillsList, setSkillsList] = useState(skills)

  const handleChange = (value) => {
    setSkillsList(value);
  };

  const handleSubmit = () => {
    setSkills(skillsList);
    sendApplicantProfile();
  };

  const Displayed = () => (
    <Styled.TagsContainer>
      {skills.length > 0 ? (
        skills.map((item) => <Styled.Tag key={item}>{item}</Styled.Tag>)
      ) : (
        <Styled.Tag>Please, select your skills</Styled.Tag>
      )}
    </Styled.TagsContainer>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={
        <Editable
          changed={handleChange}
          submitted={handleSubmit}
          value={skillsList}
        />
      }
      name="Skills"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.applicant.skills,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSkills: (skills) =>
      dispatch({
        type: actionTypes.APPLICANT_PROFILE.SET_SKILLS,
        payload: skills,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
