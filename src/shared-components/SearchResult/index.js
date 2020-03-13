import React, { memo } from "react";
import * as Styled from "./styled";
import { SubmitBtn } from "../Buttons";

export default memo(
  ({ walletID, gender, age, skills, requested, clickedSend }) => (
    <Styled.Container>
      {/* <Styled.WalletID>{walletID}</Styled.WalletID> */}
      <Styled.Gender>{gender}</Styled.Gender>
      <Styled.Age>{age}</Styled.Age>
      <Styled.Skills>{skills}</Styled.Skills>
      <SubmitBtn 
        disabled={requested === "true"}
        clicked={clickedSend} 
        text="Send" 
      />
    </Styled.Container>
  )
);
