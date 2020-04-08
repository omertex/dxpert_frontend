import React, { useState } from "react";
import * as Styled from "./styled";
import InfoContainer from "../../../shared-components/ProfileInfo/InfoContainer";
import { SubmitBtn } from "../../../shared-components/Buttons";
import Info from "../Info";
import { TextInput } from "../../../shared-components/FilterInputs";
import { FilterSelect } from "../../FilterSelect";
import { TextArea } from "../../../shared-components/FilterTextAreas";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

const dataSelect = ["Ten", "Twenty", "Thirty"];

const Editable = ({ changed, submitted, info }) => (
  <Styled.Form>
    <Info title="Company">
      <TextInput
        name="company"
        value={info["company"]}
        onChange={changed}
        width="290px"
      />
    </Info>
    <Info title="E-mail">
      <TextInput
        name="email"
        value={info["email"]}
        onChange={changed}
        width="290px"
      />
    </Info>
    <Info title="Country">
      <FilterSelect
        name="country"
        changed={changed}
        value={info["country"]}
        data={dataSelect}
        width="290px"
        placeholder="Select Country"
      />
    </Info>
    <Info title="City">
      <FilterSelect
        name="city"
        changed={changed}
        value={info["city"]}
        data={dataSelect}
        width="290px"
        placeholder="Select City"
      />
    </Info>
    <Info title="Web-site">
      <TextInput
        name="website"
        value={info["website"]}
        onChange={changed}
        width="290px"
      />
    </Info>
    <Info title="About company">
      <TextArea
        name="aboutCompany"
        value={info["aboutCompany"]}
        changed={changed}
        width="390px"
      />
    </Info>
    <Styled.SubmitBox>
      <SubmitBtn clicked={submitted} text="submit" />
    </Styled.SubmitBox>
  </Styled.Form>
);

const InfoBlock = ({ companyInfo, setCompanyInfo }) => {
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setCompanyInfo(info);
  };

  const Displayed = () => (
    <Styled.DisplayedInfo>
      <Info title="Company" description={companyInfo["company"] || "Omertex"} />
      <Info
        title="E-mail"
        description={companyInfo["email"] || "Omertex@omertex.com"}
      />
      <Info title="Country" description={companyInfo["country"] || "USA"} />
      <Info title="City" description={companyInfo["city"] || "New-York"} />
      <Info
        title="Web-site"
        description={companyInfo["website"] || "Omertex.com"}
      />
      <Info
        title="About company"
        description={
          companyInfo["aboutCompany"] || "Software product development company"
        }
      />
    </Styled.DisplayedInfo>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={
        <Editable changed={handleChange} submitted={handleSubmit} info={info} />
      }
      name="Contact details"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    companyInfo: state.company,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCompanyInfo: (info) =>
      dispatch({
        type: actionTypes.EMPLOYER_PROFILE.SET_EMPLOYER_PROFILE,
        payload: info,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoBlock);
