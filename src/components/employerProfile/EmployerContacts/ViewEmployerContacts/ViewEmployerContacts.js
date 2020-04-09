import React from "react";
import Info from "../../../../shared-components/ProfileInfo/Info";
import * as Styled from "./ViewEmployerContacts.styled";

const ViewEmployerContacts = ({ employerProfile }) => (
  <Styled.DisplayedInfo>
    <Info
      title="Company"
      description={employerProfile["organisation"] || "not specified"}
    />
    <Info
      title="E-mail"
      description={employerProfile["email"] || "not specified"}
    />
    <Info title="Country" description={employerProfile["country"] || "not specified"} />
    <Info title="City" description={employerProfile["city"] || "not specified"} />
    <Info
      title="Web-site"
      description={employerProfile["website"] || "not specified"}
    />
    <Info
      title="About company"
      description={
        employerProfile["about"] ||
        "not specified"
      }
    />
  </Styled.DisplayedInfo>
);

export default ViewEmployerContacts;
