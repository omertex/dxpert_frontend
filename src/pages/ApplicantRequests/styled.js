import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const Container = styled.div`
  width: 930px;
  margin: 0 auto;
  flex-grow: 1;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
`;

export const Requests = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
`;

export const BottomBtn = styled.div`
  margon-top: 7px;
  display: flex;
  justify-content: flex-end;
`;

export const AcceptAll = styled.button`
  font: 12px Open Sans, sans-serif;
  line-height: 16px;
  letter-spacing: 0.03rem;
  background-color: ${Colors.bg_white};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  color: ${Colors.main_header};
`;
