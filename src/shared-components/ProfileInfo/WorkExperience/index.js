import React, { useState } from "react";
import { connect } from "react-redux";
import {
  convertISODateToShort,
  trimISOStringMs,
} from "../../../services/dateTime";
import * as actionTypes from "../../../store/actions/actionTypes";
import { SubmitBtn } from "../../Buttons";
import { TextInput } from "../../FilterInputs";
import StyledCheckbox from "../../StyledCheckbox";
import { DatePicker } from "../../StyledDatePicker";
import Info from "../Info";
import InfoContainer from "../InfoContainer";
import * as Styled from "./styled";
import validate from "validate.js";

const сonstraints = {
  from: {
    presence: { allowEmpty: false },
  },
  company: {
    presence: { allowEmpty: false },
  },
  position: {
    presence: { allowEmpty: false },
  },
};

const Editable = ({
  changed,
  submitted,
  experience,
  onAddWork,
  onRemoveWork,
  toPresentHandler,
  validationErrors,
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
            error={validationErrors[index].from}
          />
        </Info>
        <Info title="End">
          <DatePicker
            width="150px"
            name="to"
            changed={(e) => changed(e, index)}
            value={item.to}
            disabled={!item.to}
          />
          <Styled.CheckBox>
            <StyledCheckbox
              label="To present"
              checked={!item.to}
              onChange={() => toPresentHandler(index)}
            />
          </Styled.CheckBox>
        </Info>
        <Info title="Organization">
          <TextInput
            width="290px"
            name="company"
            placeholder="Organization"
            onChange={(e) => changed(e, index)}
            value={item["company"]}
            error={validationErrors[index].company}
          />
        </Info>
        <Info title="Position">
          <TextInput
            width="290px"
            placeholder="Position"
            name="position"
            onChange={(e) => changed(e, index)}
            value={item["position"]}
            error={validationErrors[index].position}
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

const Experience = ({
  workExperience,
  setWorkExperience,
  sendApplicantProfile,
}) => {
  const [experience, setExperience] = useState(workExperience);
  const [validationErrors, setValidationErrors] = useState(
    Array.from({ length: workExperience.length }, (item) => ({}))
  );

  const handleChange = (e, index) => {
    const {
      target: { name, value },
    } = e;
    // tricky destructuring assignment
    const { [name]: omitted, ...otherValidationErrors } = validationErrors[
      index
    ];
    const newValidationErrors = validationErrors;
    newValidationErrors[index] = otherValidationErrors;
    setValidationErrors(newValidationErrors);
    const newExperience = [...experience];
    newExperience[index][name] = value;
    setExperience(newExperience);
  };

  const handleSubmit = () => {
    const validationResultArray = experience.map((item) => {
      return validate(
        {
          from: item.from,
          company: item.company,
          position: item.position,
        },
        сonstraints
      );
    });

    let isValid = true;

    const newValidationErrors = validationResultArray.map((item) => {
      const normalizedItem = item || {};
      if (
        !!normalizedItem.from ||
        !!normalizedItem.company ||
        normalizedItem.position
      ) {
        isValid = false;
      }
      return {
        from: !!normalizedItem.from,
        company: !!normalizedItem.company,
        position: !!normalizedItem.position,
      };
    });

    setValidationErrors(newValidationErrors);

    if (!isValid) {
      return;
    }

    setWorkExperience(experience);
    sendApplicantProfile();
  };

  const addWorkHandler = () => {
    setExperience([
      ...experience,
      { from: "", to: "", company: "", position: "" },
    ]);
    setValidationErrors([...validationErrors, {}]);
  };

  const removeWorkHandler = (index) => {
    const newExperience = experience.filter(
      (item, currentIndex) => currentIndex !== index
    );
    setExperience(newExperience);
    const newValidationErrors = validationErrors.filter(
      (item, currentIndex) => currentIndex !== index
    );
    setValidationErrors(newValidationErrors);
  };

  const toPresentHandler = (index) => {
    const newExperience = [...experience];
    newExperience[index].to = experience[index].to
      ? ""
      : trimISOStringMs(new Date().toISOString());
    setExperience(newExperience);
  };

  const Displayed = ({ experience }) => (
    <>
      {experience.map((item, i) => (
        <Styled.DisplayedInfo key={i}>
          <Info title="Start of work">
            <Styled.DateInfo>
              <span>
                {convertISODateToShort(item["from"]) || "not specified"}
              </span>
            </Styled.DateInfo>
          </Info>
          <Info title="End">
            <Styled.DateInfo>
              <span>
                {item.to ? convertISODateToShort(item["to"]) : "to present"}
              </span>
            </Styled.DateInfo>
          </Info>
          <Info
            title="Organization"
            description={item["company"] || "not specified"}
          />
          <Info
            title="Position"
            description={item["position"] || "not specified"}
          />
        </Styled.DisplayedInfo>
      ))}
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
          toPresentHandler={toPresentHandler}
          validationErrors={validationErrors}
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
