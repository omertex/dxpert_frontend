import React, { useState } from "react";
import InfoContainer from "../../../shared-components/ProfileInfo/InfoContainer";
import ViewProfileDetails from "./ViewProfileDetails/ViewProfileDetails";
import EditProfileDetails from "./EditProfileDetails/EditProfileDetails";
import imgBase64 from "../../../services/imgBase64";

const ProfileDetails = ({ details, setDetails, sendApplicantProfile }) => {
  const [detailsState, setDetailsState] = useState(details);

  const avatarChangeHandler = async (e) => {
    const avatar = await imgBase64(e.target.files[0]);
    setDetailsState({
      ...detailsState,
      avatar,
    });
  };

  const nameChangeHandler = (e) => {
    setDetailsState({ ...detailsState, name: e.target.value });
  };

  const submitHandler = () => {
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
        />
      }
    />
  );
};

export default ProfileDetails;
