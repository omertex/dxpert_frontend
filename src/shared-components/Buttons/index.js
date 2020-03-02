import React from 'react';
import * as Styled from './styled.js';

export const ContinueBtn = ({ text, disabled, clicked }) => (
  <Styled.ContinueBtn 
    onClick={ clicked }
    disabled={ disabled }>
    { text }
    <Styled.Arrow font-size="small" disabled={ disabled } />
  </Styled.ContinueBtn>
)

export const PreviousBtn = ({ text, disabled, clicked }) => (
  <Styled.PreviousBtn 
    onClick={ clicked }
    disabled={ disabled }>
    { text }
  </Styled.PreviousBtn>
)