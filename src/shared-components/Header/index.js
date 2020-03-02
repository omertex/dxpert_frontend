import React from 'react';
import * as Styled from './styled';
import Logo from '../../assets/images/logo.png';

export default () => (
  <Styled.Header>
    <Styled.Container>
      <img src={ Logo } alt="Logo" />
    </Styled.Container>
  </Styled.Header>
)