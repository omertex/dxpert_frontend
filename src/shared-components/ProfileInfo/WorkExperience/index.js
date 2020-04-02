import React, { useState } from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { DatePicker } from "../../StyledDatePicker";
import { TextInput } from "../../FilterInputs";
import StyledCheckbox from "../../StyledCheckbox";
import Info from "../Info";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

const Editable = ({
  changed,
  submitted,
  experience,
  onAddWork,
  onRemoveWork,
}) => (
  <Styled.Form>
    {experience.map((item, index) => (
      <Styled.DisplayedInfo key={index}>
        <Info title="Start of work">
          <DatePicker
            width="150px"
            name="from"
            changed={(e) => changed(e, index)}
            value={item["from"]}
          />
        </Info>
        <Info title="End">
          <DatePicker
            width="150px"
            name="to"
            changed={(e) => changed(e, index)}
            value={item["to"]}
          />
          <Styled.CheckBox>
            <StyledCheckbox label="To present" />
          </Styled.CheckBox>
        </Info>
        <Info title="Organization">
          <TextInput
            width="290px"
            name="company"
            placeholder="Organization"
            onChange={(e) => changed(e, index)}
            value={item["company"]}
          />
        </Info>
        <Info title="Position">
          <TextInput
            width="290px"
            placeholder="Position"
            name="Position"
            onChange={(e) => changed(e, index)}
            value={item["Position"]}
          />
        </Info>
        <Styled.AddInfo
          style={{ alignSelf: "start" }}
          onClick={() => onRemoveWork(index)}
        >
          remove Work Experience
        </Styled.AddInfo>
      </Styled.DisplayedInfo>
    ))}

    <Styled.BottomBtnBox>
      <Styled.AddInfo onClick={onAddWork}>add Work Experience</Styled.AddInfo>
    </Styled.BottomBtnBox>
    <Styled.SubmitBox>
      <SubmitBtn text="submit" clicked={submitted} />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Experience = ({ workExperience, setWorkExperience }) => {
  const [experience, setExperience] = useState(workExperience);

  const handleChange = (e, index) => {
    const {
      target: { name, value },
    } = e;
    const newExperience = [...experience];
    newExperience[index][name] = value;
    setExperience(newExperience);
  };

  const handleSubmit = () => {
    setWorkExperience(experience);
  };

  const addWorkHandler = () => {
    const newExperience = [
      ...experience,
      { from: "", to: "", company: "", Position: "" },
    ];
    setExperience(newExperience);
  };

  const removeWorkHandler = (index) => {
    const newExperience = experience.filter(
      (item, currentIndex) => currentIndex !== index
    );
    setExperience(newExperience);
  };

  const Displayed = ({ experience }) => (
    <>
      {experience.map((item, i) => (
        <Styled.DisplayedInfo key={i}>
          <Info title="Start of work">
            <Styled.DateInfo>
              <span>{item["from"] || "not specified"}</span>
            </Styled.DateInfo>
          </Info>
          <Info title="End">
            <Styled.DateInfo>
              <span>{item["to"] || "not specified"}</span>
            </Styled.DateInfo>
          </Info>
          <Info
            title="Organization"
            description={item["company"] || "not specified"}
          />
          <Info
            title="Position"
            description={item["Position"] || "not specified"}
          />
        </Styled.DisplayedInfo>
      ))}
      {/* <Styled.BottomBtnBox>
        <Styled.AddInfo>add Work Experience</Styled.AddInfo>
      </Styled.BottomBtnBox> */}
    </>
  );

  return (
    <InfoContainer
      displayed={<Displayed experience={experience} />}
      editable={
        <Editable
          submitted={handleSubmit}
          changed={handleChange}
          experience={experience}
          onAddWork={addWorkHandler}
          onRemoveWork={removeWorkHandler}
        />
      }
      name="Work Experience"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    workExperience: state.applicant.workExperience,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWorkExperience: (exp) =>
      dispatch({
        type: actionTypes.APPLICANT_PROFILE.SET_WORK_EXPERIENCE,
        payload: exp,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
