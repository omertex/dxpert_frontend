import React, { useState } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../configuration/TemporaryConsts";
import * as actionTypes from "../../../store/actions/actionTypes";
import { SubmitBtn } from "../../Buttons";
import { MultiSelect } from "../../MultiSelect";
import InfoContainer from "../InfoContainer";
import * as Styled from "./styled";

const Editable = ({ value, changed, submitted }) => (
  <Styled.Form>
    <MultiSelect
      data={LANGUAGES}
      value={value}
      placeholder="Enter language"
      onChange={changed}
      width="431px"
    />
    <Styled.SubmitBox>
      <SubmitBtn text="submit" clicked={submitted} />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Languages = ({ langs, setLangs, sendApplicantProfile }) => {
  const [languages, setLanguages] = useState(langs);

  const handleChange = (value) => {
    setLanguages(value);
  };

  const handleSubmit = () => {
    setLangs(languages);
    sendApplicantProfile();
  };

  const Displayed = () => (
    <Styled.TagsContainer>
      {langs.length > 0 ? (
        langs.map((item) => <Styled.Tag key={item}>{item}</Styled.Tag>)
      ) : (
        <Styled.Tag>Please, select languages</Styled.Tag>
      )}
    </Styled.TagsContainer>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={
        <Editable
          value={languages}
          changed={handleChange}
          submitted={handleSubmit}
        />
      }
      name="Languages"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    langs: state.applicant.languages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLangs: (languages) =>
      dispatch({
        type: actionTypes.APPLICANT_PROFILE.SET_LANGUAGES,
        payload: languages,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Languages);
