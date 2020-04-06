import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Colors } from "../../configuration/Colors";

const Loading = styled(CircularProgress)`
  color: ${Colors.main_header} !important;
`;

const Underlayer = styled.div`
  position: ${(props) => (props.full ? "fixed" : "relative")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  width: 100%;
  height: ${(props) => (props.full ? "100vh" : "80vh")};
  top: 0;
  left: 0;
  background: ${(props) => (props.full ? "rgba(0, 0, 0, 0.3)" : "none")};
  backdrop-filter: ${(props) => (props.full ? "blur(4px)" : "none")};
`;

export default ({ fullScreen }) => (
  <Underlayer full={fullScreen}>
    <Loading />
  </Underlayer>
);
