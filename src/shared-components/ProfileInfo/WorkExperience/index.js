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

const Editable = ({ changed, submitted, exper }) => (
  <Styled.Form>
    <Styled.DisplayedInfo>
      <Info title="Start of work">
        <DatePicker
          width="150px"
          name="start"
          changed={changed}
          value={exper["start"]}
        />
      </Info>
      <Info title="End">
        <DatePicker
          width="150px"
          name="end"
          changed={changed}
          value={exper["end"]}
        />
        <Styled.CheckBox>
          <StyledCheckbox label="To present" />
        </Styled.CheckBox>
      </Info>
      <Info title="Organization">
        <TextInput
          width="290px"
          name="organization"
          placeholder="Organization"
          onChange={changed}
          value={exper["organization"]}
        />
      </Info>
      <Info title="Position">
        <TextInput
          width="290px"
          placeholder="Position"
          name="position"
          onChange={changed}
          value={exper["position"]}
        />
      </Info>
    </Styled.DisplayedInfo>
    <Styled.BottomBtnBox>
      <Styled.AddInfo>add Work Experience</Styled.AddInfo>
    </Styled.BottomBtnBox>
    <Styled.SubmitBox>
      <SubmitBtn text="submit" clicked={submitted} />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Experience = ({ experience, setWorkExperience }) => {
  const [exper, setExper] = useState({});

  const handleChange = (e) => {
    setExper({
      ...exper,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setWorkExperience(exper);
  };

  const Displayed = () => (
    <React.Fragment>
      <Styled.DisplayedInfo>
        <Info title="Start of work">
          <Styled.DateInfo>
            <span>{experience["start"] || "2020-01-01"}</span>
          </Styled.DateInfo>
        </Info>
        <Info title="End">
          <Styled.DateInfo>
            <span>{experience["end"] || "2020-01-01"}</span>
          </Styled.DateInfo>
        </Info>
        <Info
          title="Organization"
          description={experience["organization"] || "Omertex"}
        />
        <Info
          title="Position"
          description={experience["position"] || "Front-end developer"}
        />
      </Styled.DisplayedInfo>
      <Styled.BottomBtnBox>
        <Styled.AddInfo>add Work Experience</Styled.AddInfo>
      </Styled.BottomBtnBox>
    </React.Fragment>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={
        <Editable
          submitted={handleSubmit}
          changed={handleChange}
          exper={exper}
        />
      }
      name="Work Experience"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    experience: state.applicant.workExperience,
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
