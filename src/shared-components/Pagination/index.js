import React from 'react';
import * as Styled from './styled';

export default () => (
  <Styled.Container>
    <Styled.Button>Previous</Styled.Button>
    <Styled.Pages>
      <Styled.Page isCurrent >1</Styled.Page>
      <Styled.Page>2</Styled.Page>
      <Styled.Page>3</Styled.Page>
      <Styled.Page>...</Styled.Page>
      <Styled.Page>7</Styled.Page>
      <Styled.Page>8</Styled.Page>
      <Styled.Page>9</Styled.Page>
    </Styled.Pages>
    <Styled.Button>Next</Styled.Button>
  </Styled.Container>
)