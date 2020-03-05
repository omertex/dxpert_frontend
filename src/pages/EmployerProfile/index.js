import React from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import EmployerContacts from "../../shared-components/ProfileInfo/EmployerContacts";
import PageName from "../../shared-components/PageName";

export default () => (
  <Styled.Container>
    <ShortInfo needWalletInfo />
    <PageName pageName={"My profile"} />
    <EmployerContacts />
  </Styled.Container>
);
