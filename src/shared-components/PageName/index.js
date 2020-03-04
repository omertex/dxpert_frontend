import React from "react";
import * as Styled from "./styled";

export default ({ pageName, littleBottom }) => (
  <Styled.Container littleBottom={littleBottom}>
    <h2>{pageName || "Unknown"}</h2>
  </Styled.Container>
);
