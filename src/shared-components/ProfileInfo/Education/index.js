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

const Editable = ({ submitted, changed, edu }) => (
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
            name="facility"
            value={item["facility"]}
            onChange={(e) => changed(e, index)}
          />
        </Info>
        <Info title="Department">
          <TextInput
            width="290px"
            placeholder="Specialization"
            name="specialization"
            value={item["specialization"]}
            onChange={(e) => changed(e, index)}
          />
        </Info>
        <Info title="Profession">
          <TextInput
            width="290px"
            placeholder="Profession"
            name="profession"
            value={item["profession"]}
            onChange={(e) => changed(e, index)}
          />
        </Info>
        <Info title="Year of graduation">
          <TextInput
            width="85px"
            placeholder="Year"
            name="to"
            value={item["to"]}
            onChange={(e) => changed(e, index)}
          />
        </Info>
      </Styled.DisplayedInfo>
    ))}
    <Styled.BottomBtnBox>
      <Styled.AddInfo>add one more place of study</Styled.AddInfo>
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

  // const convertDatesToRangeString = (from, to) => {
  //   if (!from && !to) {
  //     return "not specified";
  //   }
  //   const fromYear = new Date(from).getFullYear();
  //   const toYear = new Date(to).getFullYear();
  //   return `${fromYear}-${toYear}`;
  // };

  const Displayed = () => (
    <React.Fragment>
      {education.map((item, index) => (
        <Styled.DisplayedInfo key={index}>
          <Info title={item["to"]}>
            <Styled.Education>
              <h6>{item["facility"] || "not specified"}</h6>
              <p>{item["specialization"] || "not specified"}</p>
              <p>{item["level"] || "not specified"}</p>
              <p>{item["profession"] || "not specified"}</p>
            </Styled.Education>
          </Info>
        </Styled.DisplayedInfo>
      ))}

      <Styled.BottomBtnBox>
        <Styled.AddInfo>add Education</Styled.AddInfo>
      </Styled.BottomBtnBox>
    </React.Fragment>
  );

  console.log("edu", edu);

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={
        <Editable changed={handleChange} submitted={handleSubmit} edu={edu} />
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
