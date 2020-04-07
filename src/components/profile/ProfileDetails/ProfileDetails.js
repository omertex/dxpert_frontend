import React, { useState } from "react";
import InfoContainer from "../../../shared-components/ProfileInfo/InfoContainer";
import ViewProfileDetails from "./ViewProfileDetails/ViewProfileDetails";
import EditProfileDetails from "./EditProfileDetails/EditProfileDetails";
import imgBase64 from "../../../services/imgBase64";
import validate from "validate.js";

const сonstraints = {
  name: {
    presence: { allowEmpty: false },
  },
};

const ProfileDetails = ({ details, setDetails, sendApplicantProfile }) => {
  const [detailsState, setDetailsState] = useState(details);
  const [isValid, setIsValid] = useState({ name: true });

  const avatarChangeHandler = async (e) => {
    const avatar = await imgBase64(e.target.files[0]);
    setDetailsState({
      ...detailsState,
      avatar,
    });
  };

  const nameChangeHandler = (e) => {
    setIsValid({ ...isValid, name: true });
    setDetailsState({ ...detailsState, name: e.target.value });
  };

  const submitHandler = () => {
    const validationResult = validate({ name: detailsState.name }, сonstraints);
    if (validationResult) {
      setIsValid({
        ...isValid,
        name: !validationResult.name,
      });
      return;
    }

    setDetails(detailsState);
    sendApplicantProfile();
  };

  return (
    <InfoContainer
      name="Profile Details"
      displayed={<ViewProfileDetails details={details} />}
      editable={
        <EditProfileDetails
          avatar={detailsState.avatar}
          name={detailsState.name}
          onAvatarChange={avatarChangeHandler}
          onNameChange={nameChangeHandler}
          onSubmit={submitHandler}
          isValid={isValid}
        />
      }
    />
  );
};

export default ProfileDetails;
