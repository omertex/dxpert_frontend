import React from "react";
import * as Styled from "./styled";
import Logo from "../../assets/images/logo-footer.png";

export default () => (
  <Styled.Footer>
    <Styled.Container>
      <img src={Logo} alt="Logo" />
      <Styled.Copyright>2020 DXpert. . All right reserved.</Styled.Copyright>
    </Styled.Container>
  </Styled.Footer>
);
