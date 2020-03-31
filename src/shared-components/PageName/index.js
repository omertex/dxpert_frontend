import React from "react";
import * as Styled from "./styled";
import { LogOutBtn } from "../Buttons";

export default ({ pageName, littleBottom, onLogOut }) => (
  <Styled.Container littleBottom={littleBottom}>
    <h2>{pageName || "Unknown"}</h2>
    {onLogOut && <LogOutBtn text="LogOut" width={"100px"} clicked={onLogOut} />}
  </Styled.Container>
);
