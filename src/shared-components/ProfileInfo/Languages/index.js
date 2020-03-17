import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { MultiSelect } from "../../MultiSelect";
import { LANGUAGES } from "../../../configuration/TemporaryConsts";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

const Editable = ({ changed, submitted }) => (
  <Styled.Form>
    <MultiSelect
      data={LANGUAGES}
      placeholder="Enter language"
      onChange={changed}
      width="431px"
    />
    <Styled.SubmitBox>
      <SubmitBtn 
        text="submit"
        clicked={submitted} 
      />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Languages = ({ langs, setLangs }) => {
  const languages = [];

  const handleChange = (e, value) => {
    value.map( val => 
      !languages.includes(val.value) && languages.push(val.value)
    );
  }

  const handleSubmit = () => {
    setLangs(languages);
  }

  const Displayed = () => (
    <Styled.TagsContainer>
      { (langs.length > 0)
        ? langs.map(item => (
            <Styled.Tag key={item}>{item}</Styled.Tag>
          ))
        : <Styled.Tag>Please, select languages</Styled.Tag>
      }
    </Styled.TagsContainer>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable 
                  changed={handleChange}
                  submitted={handleSubmit}
                />}
      name="Languages"
    />
  );
};

const mapStateToProps = state => {
  return {
    langs: state.applicant.languages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLangs: languages => dispatch({ type: actionTypes.APPLICANT_PROFILE.SET_LANGUAGES, payload: languages })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Languages);
