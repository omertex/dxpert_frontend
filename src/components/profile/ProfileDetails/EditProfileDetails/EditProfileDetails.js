import Avatar from "@material-ui/core/Avatar";
import React from "react";
import Info from "../../../../shared-components/ProfileInfo/Info";
import * as Styled from "./EditProfileDetails.styled.js";
import {
  FileUploadBtn,
  SubmitBtn,
} from "../../../../shared-components/Buttons";
import { TextInput } from "../../../../shared-components/FilterInputs";

const EditProfileDetails = ({
  avatar,
  name,
  onAvatarChange,
  onNameChange,
  onSubmit,
}) => (
  <div>
    <Styled.AvatarTitle>Your Profile Photo</Styled.AvatarTitle>
    <Styled.AvatarContainer>
      <Avatar src={avatar} />
      <FileUploadBtn onChange={onAvatarChange}>
        select profile photo
      </FileUploadBtn>
    </Styled.AvatarContainer>
    {/* <Info
      title="Your Name"
      description={detailsState.name || "not specified"}
    /> */}
    <Styled.NameContainter>
      <Styled.NameLabel>Your name</Styled.NameLabel>
      <TextInput value={name} placeholder="Your Name" onChange={onNameChange} />
    </Styled.NameContainter>

    <Styled.SubmitBox>
      <SubmitBtn clicked={onSubmit} text="submit" />
    </Styled.SubmitBox>
  </div>
);

// name="phoneNumber"
// onChange={changed}
// width="290px"

export default EditProfileDetails;
