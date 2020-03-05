import React from 'react';
import * as Styled from './styled';

export default ({ title, description, children }) => (
  <Styled.Info>
    <Styled.Title>{ title }</Styled.Title>
    <Styled.Description>{ description }</Styled.Description>
    { children }
  </Styled.Info>
)