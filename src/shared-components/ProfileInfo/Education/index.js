import React, { useState } from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { TextInput } from "../../FilterInputs";
import { FilterSelect } from "../../FilterSelect";
import Info from "../Info";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

const educationLevels = [
  "primary",
  "secondary",
  "upper-secondary",
  "bachelor",
  "master",
  "doctor"
]

const Editable = ({ submitted, changed, edu }) => (
  <Styled.Form>
    <Styled.DisplayedInfo>
      <Info title="Level">
        <FilterSelect 
          width="290px" 
          data={educationLevels}
          placeholder="Level or Type"
          name="level"
          value={edu["level"]}
          onChange={changed} 
        />
      </Info>
      <Info title="Educational institution">
        <TextInput 
          width="290px" 
          placeholder="Name or abbreviation"
          name="institution"
          value={edu["institution"]}
          onChange={changed} 
        />
      </Info>
      <Info title="Department">
        <TextInput 
          width="290px" 
          placeholder="Department"
          name="department"
          value={edu["department"]}
          onChange={changed} 
        />
      </Info>
      <Info title="Specialization">
        <TextInput 
          width="290px" 
          placeholder="Specialization"
          name="specialization"
          value={edu["specialization"]}
          onChange={changed} 
        />
      </Info>
      <Info title="Year of graduation">
        <TextInput 
          width="85px" 
          placeholder="Year"
          name="graduation"
          value={edu["graduation"]}
          onChange={changed} 
        />
      </Info>
    </Styled.DisplayedInfo>
    <Styled.BottomBtnBox>
      <Styled.AddInfo>add one more place of study</Styled.AddInfo>
    </Styled.BottomBtnBox>
    <Styled.SubmitBox>
      <SubmitBtn 
        text="submit" 
        clicked={submitted}
      />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Education = ({ education, setEducation, applicant }) => {
  const [edu, setEdu] = useState({});

  const handleChange = e => {
    setEdu({
      ...edu, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    setEducation(edu);
    console.log(applicant);
  }

  const Displayed = () => (
    <React.Fragment>
      <Styled.DisplayedInfo>
        <Info title={ education["graduation"] || "2016" }>
          <Styled.Education>
            <h6>{ education["institution"] || "Belarusian State University" }</h6>
            <p>{ education["department"] || "Faculty of social and cultural communication" }</p>
            <p>{ education["level"] || "Bachelor’s Degree" }</p>
            <p>{ education["specialization"] || "Design" }</p>
          </Styled.Education>
        </Info>
        {/* <Info title="2017">
          <Styled.Education>
            <h6>Belarusian State University</h6>
            <p>Faculty of social and cultural communication</p>
            <p>Bachelor’s Degree</p>
            <p>Design</p>
          </Styled.Education>
        </Info> */}
      </Styled.DisplayedInfo>
      <Styled.BottomBtnBox>
        <Styled.AddInfo>add Education</Styled.AddInfo>
      </Styled.BottomBtnBox>
    </React.Fragment>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable 
                  changed={handleChange}
                  submitted={handleSubmit}
                  edu={edu}
                />}
      name="Education"
    />
  );
};

const mapStateToProps = state => {
  return {
    education: state.applicant.education,
    applicant: state.applicant
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEducation: edu => dispatch({type: actionTypes.APPLICANT_PROFILE.SET_EDUCATION, payload: edu})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);
