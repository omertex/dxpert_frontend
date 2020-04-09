import React, { useEffect } from "react";
import ShortInfo from "../../shared-components/ShortInfo";
import PageLayout from "../../shared-components/PageLayout/PageLayout";
import EmployerContacts from "../../components/employerProfile/EmployerContacts/EmployerContacts";
import PageName from "../../shared-components/PageName";
import { connect } from "react-redux";
import * as ACTIONS from "../../store/actions";
import {
  getEmployerProfile,
  updateEmployerProfile,
} from "../../store/actions/employerProfile";
import PageLoading from "../../shared-components/PageLoading";
import {
  getCountriesListAction,
  getCitiesListAction,
} from "../../store/actions/serviceDataActions";

const EmployerProfile = (props) => {
  useEffect(() => {
    props.getEmployerProfile(props.address);
    props.getCountriesList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (props.employer.isProfileLoaded) {
      props.getCitiesList(props.employer.profile.country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.employer.isProfileLoaded]);

  return props.employer.isProfileLoaded ? (
    <PageLayout>
      <ShortInfo address={props.address} />
      <PageName pageName={"My profile"} onLogOut={props.logout} />
      <EmployerContacts
        employerProfile={props.employer.profile}
        countries={props.countries}
        cities={props.cities}
        getCitiesList={props.getCitiesList}
        updateEmployerProfile={props.updateEmployerProfile}
      />
    </PageLayout>
  ) : (
    <PageLoading />
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
    employer: state.employer,
    countries: state.serviceData.countries,
    cities: state.serviceData.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployerProfile: (address) => dispatch(getEmployerProfile(address)),
    logout: () => dispatch(ACTIONS.logout()),
    getCountriesList: () => dispatch(getCountriesListAction()),
    getCitiesList: (country) => dispatch(getCitiesListAction(country)),
    updateEmployerProfile: (employerProfile) =>
      dispatch(updateEmployerProfile(employerProfile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerProfile);
