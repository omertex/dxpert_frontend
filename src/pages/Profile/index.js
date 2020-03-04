import React from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import PageName from "../../shared-components/PageName";
import AboutMe from "../../shared-components/ProfileInfo/AboutMe";
import Skills from "../../shared-components/ProfileInfo/Skills";
import Languages from "../../shared-components/ProfileInfo/Languages";

export default () => (
  <Styled.Container>
    <ShortInfo />
    <PageName pageName={"My profile"} />
    <AboutMe />
    <Skills />
    <Languages />
  </Styled.Container>
);
