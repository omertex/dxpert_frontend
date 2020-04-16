import Avatar from "@material-ui/core/Avatar";
import React from "react";
import Info from "../../../../shared-components/ProfileInfo/Info";
import * as Styled from "./EditProfileDetails.styled.js";
import {
  FileUploadBtn,
  SubmitBtn,
  TransparentBtn,
} from "../../../../shared-components/Buttons";
import { TextInput } from "../../../../shared-components/FilterInputs";

const EditProfileDetails = ({
  avatar,
  name,
  onAvatarChange,
  onNameChange,
  onSubmit,
  validationErrors,
  handleRemoveAvatar,
}) => (
  <div>
    <Styled.AvatarTitle>Your Profile Photo</Styled.AvatarTitle>
    <Styled.AvatarContainer>
      <Avatar src={avatar} />
      <FileUploadBtn onChange={onAvatarChange}>
        select profile photo
      </FileUploadBtn>
      <TransparentBtn onClick={handleRemoveAvatar}>
        remove profile photo
      </TransparentBtn>
    </Styled.AvatarContainer>
    <Styled.NameContainter>
      <Styled.NameLabel>Your name</Styled.NameLabel>
      <TextInput
        value={name}
        placeholder="Your Name"
        onChange={onNameChange}
        error={validationErrors.name}
      />
    </Styled.NameContainter>

    <Styled.SubmitBox>
      <SubmitBtn clicked={onSubmit} text="submit" />
    </Styled.SubmitBox>
  </div>
);

export default EditProfileDetails;
