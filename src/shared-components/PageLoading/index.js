import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Colors } from "../../configuration/Colors";

const Loading = styled(CircularProgress)`
  color: ${Colors.main_header} !important;
`;

const Underlayer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
`;

const PageLoading = () => (
  <Underlayer>
    <Loading />
  </Underlayer>
);

export default () => <PageLoading />;
