import React, { useState } from "react";
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

const dataSelect = ["Ten", "Twenty", "Thirty"];

const Editable = ({ changed, contactInfo, submitted }) => (
  <Styled.Form>
    <Styled.DisplayedInfo>
      <Info title="Country">
        <FilterSelect
          name="country"
          changed={changed}
          value={contactInfo["country"]}
          data={dataSelect}
          width="290px"
          placeholder="Select Country"
        />
      </Info>
      <Info title="City">
        <FilterSelect
          name="city"
          changed={changed}
          value={contactInfo["city"]}
          data={dataSelect}
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
          placeholder="Phone Number" />
      </Info>
    </Styled.DisplayedInfo>
    <Styled.SubmitBox>
      <SubmitBtn 
        clicked={submitted}
        text="submit" />
    </Styled.SubmitBox>
  </Styled.Form>
);

const Contacts = ({ contacts, setContacts }) => {
  const [contactInfo, setContactInfo] = useState({});

  const handleInputChange = e => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    setContacts(contactInfo);
  }

  const Displayed = () => (
    <Styled.DisplayedInfo>
      <Info title="Country" description={contacts["country"] || "Belarus"} />
      <Info title="City" description={contacts["city"] || "Minsk"} />
      <Info title="Gender" description={(contacts["gender"] === "m" ? "male" : "female") || "male"} />
      <Info title="Date of birth" description={contacts["DOB"] || "24 august 1995"} />
      <Info title="Phone Number" description={contacts["phoneNumber"] || "+375 29 1234567"} />
    </Styled.DisplayedInfo>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable 
                  changed={handleInputChange}
                  contactInfo={contactInfo}
                  submitted={handleSubmit}
                />}
      name="Contact details"
    />
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.applicant.contacts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setContacts: contactInfo => dispatch({ type: actionTypes.APPLICANT_PROFILE.SET_CONTACTS, payload: contactInfo })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
