import React from 'react';
import * as Styled from './styled';

export default ({ status, walletID, gender, age, skills }) => (
  <Styled.Request status={ status }>
    { status === "pending" && <Styled.Pending fontSize="small" /> }
    { status === "completed" && <Styled.Completed fontSize="small" /> }
    { status === "failed" && <Styled.Failed fontSize="small" /> }
    <Styled.WalletID>{walletID}</Styled.WalletID>
    <Styled.Gender>{gender}</Styled.Gender>
    <Styled.Age>{age}</Styled.Age>
    <Styled.Skills>{skills}</Styled.Skills>
  </Styled.Request>
)