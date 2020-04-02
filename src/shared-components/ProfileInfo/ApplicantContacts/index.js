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
import { format, parseISO } from "date-fns";

const Editable = ({ changed, contactInfo, submitted, countries, cities }) => (
  <Styled.Form>
    <Styled.DisplayedInfo>
      <Info title="Country">
        <FilterSelect
          name="country"
          changed={changed}
          value={contactInfo["country"]}
          data={countries}
          width="290px"
          placeholder="Select Country"
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
          name="gender"
          data={GENDER}
          value={contactInfo["gender"]}
          onChange={changed}
        />
      </Info>
      <Info title="Date of birth">
        <DatePicker
          name="DOB"
          width="190px"
          value={contactInfo["DOB"]}
          changed={changed}
        />
      </Info>
      <Info title="Phone Number">
        <TextInput
          name="phoneNumber"
          onChange={changed}
          value={contactInfo["phoneNumber"]}
          width="290px"
          placeholder="Phone Number"
        />
      </Info>
    </Styled.DisplayedInfo>
    <Styled.SubmitBox>
      <SubmitBtn clicked={submitted} text="submit" />
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
}) => {
  const [contactInfo, setContactInfo] = useState(contacts);

  useEffect(() => {
    getCountriesList();
    if (contacts.country) {
      getCitiesList(contacts.country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCountriesList, getCitiesList]);

  const handleInputChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "country") {
      getCitiesList(e.target.value);
    }
  };

  const handleSubmit = () => {
    setContacts(contactInfo);
  };

  const Displayed = ({ contacts }) => (
    <Styled.DisplayedInfo>
      <Info
        title="Country"
        description={contacts["country"] || "not specified"}
      />
      <Info title="City" description={contacts["city"] || "not specified"} />
      <Info
        title="Gender"
        description={contacts["gender"] || "not specified"}
      />
      <Info
        title="Date of birth"
        description={
          format(parseISO(contacts["DOB"]), "d MMMM y") || "not specified"
        }
      />
      <Info
        title="Phone Number"
        description={contacts["phoneNumber"] || "not specified"}
      />
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
