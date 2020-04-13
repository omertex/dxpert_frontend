import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { FilterSelect } from "../../FilterSelect";
import { TextInput } from "../../FilterInputs";
import { DatePicker } from "../../StyledDatePicker";
import { RadioBtn } from "../../StyledRadioBtn";
import { GENDER } from "../../../configuration/TemporaryConsts";
import Info from "../Info";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";
import {
  getCountriesListAction,
  getCitiesListAction,
} from "../../../store/actions/serviceDataActions";
import validate from "validate.js";
import { convertISODateToLong } from "../../../services/dateTime";

const сonstraints = {
  country: {
    presence: { allowEmpty: false },
  },
  sex: {
    presence: { allowEmpty: false },
  },
  DOB: {
    presence: { allowEmpty: false },
  },
};

const Editable = ({
  changed,
  contactInfo,
  submitted,
  countries,
  cities,
  validationErrors,
}) => (
  <Styled.Form onSubmit={submitted}>
    <Styled.DisplayedInfo>
      <Info title="Country">
        <FilterSelect
          name="country"
          changed={changed}
          value={contactInfo["country"]}
          data={countries}
          width="290px"
          placeholder="Select Country"
          error={validationErrors.country}
        />
      </Info>
      <Info title="City">
        <FilterSelect
          name="city"
          changed={changed}
          value={contactInfo["city"]}
          data={cities}
          width="290px"
          placeholder="Select City"
        />
      </Info>
      <Info title="Gender">
        <RadioBtn
          name="sex"
          data={GENDER}
          value={contactInfo["sex"]}
          onChange={changed}
          error={validationErrors.sex}
        />
      </Info>
      <Info title="Date of birth">
        <DatePicker
          name="DOB"
          width="190px"
          value={contactInfo["DOB"]}
          changed={changed}
          error={validationErrors.DOB}
        />
      </Info>
      <Info title="Email">
        <TextInput
          name="email"
          onChange={changed}
          value={contactInfo["email"]}
          width="290px"
          placeholder="Email"
        />
      </Info>
    </Styled.DisplayedInfo>
    <Styled.SubmitBox>
      <SubmitBtn text="submit" />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Contacts = ({
  contacts,
  countries,
  cities,
  setContacts,
  getCountriesList,
  getCitiesList,
  sendApplicantProfile,
}) => {
  const [contactInfo, setContactInfo] = useState(contacts);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    getCountriesList();
    if (contacts.country) {
      getCitiesList(contacts.country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCountriesList, getCitiesList]);

  const handleInputChange = (e) => {
    // tricky destructuring assignment
    const {
      [e.target.name]: omitted,
      ...otherValidationErrors
    } = validationErrors;
    setValidationErrors(otherValidationErrors);
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "country") {
      getCitiesList(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validate(
      {
        country: contactInfo.country,
        sex: contactInfo.sex,
        DOB: contactInfo.DOB,
      },
      сonstraints
    );
    if (validationResult) {
      setValidationErrors({
        ...validationErrors,
        country: !!validationResult.country,
        sex: !!validationResult.sex,
        DOB: !!validationResult.DOB,
      });
      return;
    }
    setContacts(contactInfo);
    sendApplicantProfile();
  };

  const Displayed = ({ contacts }) => (
    <Styled.DisplayedInfo>
      <Info
        title="Country"
        description={contacts["country"] || "not specified"}
      />
      <Info title="City" description={contacts["city"] || "not specified"} />
      <Info title="Gender" description={contacts["sex"] || "not specified"} />
      <Info
        title="Date of birth"
        description={
          contacts["DOB"]
            ? convertISODateToLong(contacts["DOB"])
            : "not specified"
        }
      />
      <Info title="Email" description={contacts["email"] || "not specified"} />
    </Styled.DisplayedInfo>
  );

  return (
    <InfoContainer
      displayed={<Displayed contacts={contacts} />}
      editable={
        <Editable
          changed={handleInputChange}
          contactInfo={contactInfo}
          countries={countries}
          cities={cities}
          submitted={handleSubmit}
          validationErrors={validationErrors}
        />
      }
      name="Contact details"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.applicant.contacts,
    countries: state.serviceData.countries,
    cities: state.serviceData.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setContacts: (contactInfo) =>
      dispatch({
        type: actionTypes.APPLICANT_PROFILE.SET_CONTACTS,
        payload: contactInfo,
      }),
    getCountriesList: () => dispatch(getCountriesListAction()),
    getCitiesList: (country) => dispatch(getCitiesListAction(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
