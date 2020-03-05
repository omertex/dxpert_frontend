import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../../../shared-components/ProfileInfo/InfoContainer";
import { SubmitBtn } from "../../../shared-components/Buttons";
import Info from "./Info";
import { TextInput } from '../../../shared-components/FilterInputs';
import { MultiSelect } from '../../../shared-components/MultiSelect';
import { TextArea } from '../../../shared-components/FilterTextAreas';
import { LANGUAGES} from '../../../configuration/TemporaryConsts';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

const InfoBlock = ({ onChangeDetails, details }) => {

  const Displayed = () => (
    <Styled.DisplayedInfo>
      <Info title="Company" description={details.company} />
      <Info title="E-mail" description={details.email} />
      <Info title="Country" description={details.country} />
      <Info title="City" description={details.city} />
      <Info title="Web-site" description={details.website} />
      <Info title="About company" description={details.aboutCompany} />
    </Styled.DisplayedInfo>
  );

  const Editable = () => (
    <Styled.Form>
      <Info title="Company">
        <TextInput 
          changed={(e) => onChangeDetails(e)}
          value={details.company}
          name="company" 
          width="290px" 
        />
      </Info>
      <Info title="E-mail">
        <TextInput 
          changed={(e) => onChangeDetails(e)}
          value={details.email}
          name="email" 
          width="290px" 
        />
      </Info>
      <Info title="Country">
        <MultiSelect 
          changed={(e) => onChangeDetails(e)}
          value={details.country}
          name="country" 
          width="290px" 
          data={LANGUAGES}
        />
      </Info>
      <Info title="City">
        <MultiSelect 
          changed={(e) => onChangeDetails(e)}
          value={details.city}
          name="city" 
          width="290px" 
          data={LANGUAGES}
        />
      </Info>
      <Info title="Web-site">
        <TextInput 
          changed={(e) => onChangeDetails(e)}
          value={details.website}
          name="website"  
          width="290px" 
        />
      </Info>
      <Info title="About company">
        <TextArea 
          changed={(e) => onChangeDetails(e)}
          value={details.aboutCompany}
          name="aboutCompany" 
          width="390px" 
        />
      </Info>
      <Styled.SubmitBox>
        <SubmitBtn 
          text="submit" 
        />
      </Styled.SubmitBox>
    </Styled.Form>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable />}
      name="Contact details"
    />
  );
};

const mapStateToProps = state => {
  return {
    details: state.companyDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeDetails: (e) => dispatch({ type: actionTypes.CHANGE_DETAILS, data: e.target })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoBlock);
