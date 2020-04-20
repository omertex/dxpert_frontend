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

const EmployerProfile = ({
  address,
  employer,
  countries,
  cities,
  getEmployerProfile,
  getCountriesList,
  getCitiesList,
  updateEmployerProfile,
  logout,
}) => {
  useEffect(() => {
    getEmployerProfile(address);
    getCountriesList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (employer.isProfileLoaded && employer.profile.country) {
      getCitiesList(employer.profile.country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employer.isProfileLoaded]);

  return employer.isProfileLoaded ? (
    <PageLayout>
      <ShortInfo
        avatar={employer.profile.photo || ""}
        name={employer.profile.organisation || ""}
        address={address}
      />
      <PageName pageName={"My profile"} onLogOut={logout} />
      <EmployerContacts
        employerProfile={employer.profile}
        countries={countries}
        cities={cities}
        getCitiesList={getCitiesList}
        updateEmployerProfile={updateEmployerProfile}
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
