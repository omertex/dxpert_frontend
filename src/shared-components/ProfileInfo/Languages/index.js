import React, { useState } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../configuration/TemporaryConsts";
import * as actionTypes from "../../../store/actions/actionTypes";
import { SubmitBtn } from "../../Buttons";
import { MultiSelect } from "../../MultiSelect";
import InfoContainer from "../InfoContainer";
import * as Styled from "./styled";

const Editable = ({ value, changed, submitted, validationErrors }) => (
  <Styled.Form>
    <MultiSelect
      data={LANGUAGES}
      value={value}
      placeholder="Enter language"
      onChange={changed}
      width="431px"
      error={!!validationErrors.languages}
    />
    <Styled.SubmitBox>
      <SubmitBtn text="submit" clicked={submitted} />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Languages = ({ langs, setLangs, sendApplicantProfile }) => {
  const [languages, setLanguages] = useState(langs);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (value) => {
    setLanguages(value);
    setValidationErrors({});
  };

  const handleSubmit = () => {
    if (languages.length < 1) {
      setValidationErrors({ languages: true });
      return;
    }
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
          validationErrors={validationErrors}
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
