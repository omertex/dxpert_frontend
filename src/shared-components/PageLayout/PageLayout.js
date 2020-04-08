import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 930px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
`;

export default ({ children }) => <Container>{children}</Container>;
