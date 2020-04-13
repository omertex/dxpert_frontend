import React, { useState } from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { TextArea } from "../../FilterTextAreas";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

const Editable = ({ value, clicked, changed }) => (
  <Styled.Form>
    <TextArea
      key="text-aria"
      placeholder="400 characters max"
      width="431px"
      changed={changed}
      value={value}
    />
    <Styled.SubmitBox>
      <SubmitBtn clicked={clicked} text="submit" />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Displayed = ({ aboutMe }) => <Styled.Text>{aboutMe}</Styled.Text>;

const AboutMe = ({ aboutMe, setAboutMe, sendApplicantProfile }) => {
  const [about, setAbout] = useState(aboutMe);

  const onClickSubmit = (e) => {
    e.preventDefault();
    setAboutMe(about);
    sendApplicantProfile();
  };

  const handleTextAreaChange = (e) => {
    setAbout(e.target.value);
  };

  return (
    <InfoContainer
      displayed={<Displayed aboutMe={aboutMe} />}
      editable={
        <Editable
          value={about}
          clicked={onClickSubmit}
          changed={handleTextAreaChange}
        />
      }
      name="About me"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    aboutMe: state.applicant.aboutMe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAboutMe: (about) =>
      dispatch({
        type: actionTypes.APPLICANT_PROFILE.SET_ABOUT_ME,
        payload: about,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
