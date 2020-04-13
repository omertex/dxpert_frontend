import React, { useState } from "react";
import InfoContainer from "../../../shared-components/ProfileInfo/InfoContainer";

import ViewEmployerContacts from "./ViewEmployerContacts/ViewEmployerContacts";
import EditEmployerContacts from "./EditEmployerContacts/EditEmployerContacts";

const EmployerContacts = ({
  employerProfile,
  setCompanyInfo,
  countries,
  cities,
  getCitiesList,
  updateEmployerProfile,
}) => {
  const [contacts, setContacts] = useState(employerProfile);
  const changeHanlder = (e) => {
    if (e.target.name === "country") {
      getCitiesList(e.target.value);
    }
    setContacts({
      ...contacts,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    updateEmployerProfile(contacts);
  };

  return (
    <InfoContainer
      displayed={<ViewEmployerContacts employerProfile={employerProfile} />}
      editable={
        <EditEmployerContacts
          changeHanlder={changeHanlder}
          handleSubmit={handleSubmit}
          contacts={contacts}
          countries={countries}
          cities={cities}
        />
      }
      name="Contact details"
    />
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setCompanyInfo: (info) =>
//       dispatch({
//         type: actionTypes.EMPLOYER_PROFILE.SET_EMPLOYER_PROFILE,
//         payload: info,
//       }),
//   };
// };

export default EmployerContacts;
