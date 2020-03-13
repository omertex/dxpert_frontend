import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";

export const Container = styled.div`
  padding: 23px 50px;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: ${Colors.bg_white};
  display: flex;
  flex-flow: column;
`;

export const Info = styled.div`
  padding-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.div`
  font: 16px Open Sans, sans-serif;
  line-height: 22px;
  letter-spacing: -0.4px;
  color: ${Colors.text_black};
`;

export const Edit = styled.button`
  font: 12px Open Sans, sans-serif;
  line-height: 16px;
  letter-spacing: 0.03rem;
  background-color: ${Colors.bg_white};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  color: ${Colors.main_header};
`;

export const Component = styled.div`
  width: 100%;
`;
