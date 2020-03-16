import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { MultiSelect } from "../../MultiSelect";
import { SKILLS } from "../../../configuration/TemporaryConsts";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

const Editable = ({ changed, submitted }) => (
  <Styled.Form>
    <MultiSelect 
      data={SKILLS} 
      placeholder="Enter skill" 
      width="431px"
      onChange={changed} />
    <Styled.SubmitBox>
      <SubmitBtn 
        text="submit"
        clicked={submitted} 
      />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Skills = ({ skills, setSkills }) => {
  const skillsList = [];

  const handleChange = e => {
    skillsList.push(e.target.innerHTML);
  }

  const handleSubmit = () => {
    setSkills(skillsList);
  }

  const Displayed = () => (
    <Styled.TagsContainer>
      {(skills.length > 0)
        ? skills.map(item => (
            <Styled.Tag key={item}>{item}</Styled.Tag>
          ))
        : <Styled.Tag>Please, select your skills</Styled.Tag>
      }
    </Styled.TagsContainer>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable 
                  changed={handleChange}
                  submitted={handleSubmit}
                  skillsList={skillsList}
                />}
      name="Skills"
    />
  );
};

const mapStateToProps = state => {
  return {
    skills: state.applicant.skills
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSkills: skills => dispatch({ type: actionTypes.APPLICANT_PROFILE.SET_SKILLS, payload: skills })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
