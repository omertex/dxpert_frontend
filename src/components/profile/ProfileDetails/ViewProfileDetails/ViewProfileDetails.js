import Avatar from "@material-ui/core/Avatar";
import React from "react";
import Info from "../../../../shared-components/ProfileInfo/Info";
import * as Styled from "./ViewProfileDetails.styled.js";

const ViewProfileDetails = ({ details }) => (
  <div>
    <Styled.AvatarTitle>Your Profile Photo</Styled.AvatarTitle>
    <Avatar src={details.avatar} />
    <Info title="Your Name" description={details.name || "not specified"} />
  </div>
);

export default ViewProfileDetails;
