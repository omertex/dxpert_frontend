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
  "doctor",
];

const Editable = ({
  submitted,
  changed,
  edu,
  addEducation,
  onRemoveEducation,
}) => (
  <Styled.Form>
    {edu.map((item, index) => (
      <Styled.DisplayedInfo key={index}>
        <Info title="Level">
          <FilterSelect
            width="290px"
            data={educationLevels}
            placeholder="Level or Type"
            name="level"
            value={item["level"]}
            onChange={(e) => changed(e, index)}
          />
        </Info>
        <Info title="Educational institution">
          <TextInput
            width="290px"
            placeholder="Name or abbreviation"
            name="institution"
            value={item["institution"]}
            onChange={(e) => changed(e, index)}
          />
        </Info>
        <Info title="Department">
          <TextInput
            width="290px"
            placeholder="department"
            name="department"
            value={item["department"]}
            onChange={(e) => changed(e, index)}
          />
        </Info>
        <Info title="Profession">
          <TextInput
            width="290px"
            placeholder="specialization"
            name="specialization"
            value={item["specialization"]}
            onChange={(e) => changed(e, index)}
          />
        </Info>
        <Info title="Year of graduation">
          <TextInput
            width="85px"
            placeholder="Year"
            name="graduation_year"
            value={item["graduation_year"]}
            onChange={(e) => changed(e, index)}
          />
        </Info>
        <Styled.AddInfo
          style={{ alignSelf: "start" }}
          onClick={() => onRemoveEducation(index)}
        >
          remove Education
        </Styled.AddInfo>
      </Styled.DisplayedInfo>
    ))}
    <Styled.BottomBtnBox>
      <Styled.AddInfo onClick={addEducation}>
        add one more place of study
      </Styled.AddInfo>
    </Styled.BottomBtnBox>
    <Styled.SubmitBox>
      <SubmitBtn text="submit" clicked={submitted} />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Education = ({ education, setEducation, sendApplicantProfile }) => {
  const [edu, setEdu] = useState(education);

  const handleChange = (e, index) => {
    const {
      target: { name, value },
    } = e;
    const newEdu = [...edu];
    newEdu[index][name] = value;
    setEdu(newEdu);
  };

  const handleSubmit = () => {
    setEducation(edu);
    sendApplicantProfile();
  };

  const addEducation = () => {
    const newEdu = [
      ...edu,
      {
        institution: "",
        department: "",
        level: "",
        specialization: "",
        graduation_year: "",
      },
    ];
    setEdu(newEdu);
  };

  const removeEducationHandler = (index) => {
    const newEdu = edu.filter((item, currentIndex) => currentIndex !== index);
    setEdu(newEdu);
  };

  const Displayed = () => (
    <React.Fragment>
      {education.map((item, index) => (
        <Styled.DisplayedInfo key={index}>
          <Info title={item["graduation_year"]}>
            <Styled.Education>
              <h6>{item["institution"] || "not specified"}</h6>
              <p>{item["department"] || "not specified"}</p>
              <p>{item["level"] || "not specified"}</p>
              <p>{item["specialization"] || "not specified"}</p>
            </Styled.Education>
          </Info>
        </Styled.DisplayedInfo>
      ))}
    </React.Fragment>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={
        <Editable
          changed={handleChange}
          submitted={handleSubmit}
          edu={edu}
          addEducation={addEducation}
          onRemoveEducation={removeEducationHandler}
        />
      }
      name="Education"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.applicant.education,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEducation: (edu) =>
      dispatch({
        type: actionTypes.APPLICANT_PROFILE.SET_EDUCATION,
        payload: edu,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
