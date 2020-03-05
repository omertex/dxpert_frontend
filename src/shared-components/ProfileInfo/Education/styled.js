import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";

export const Form = styled.div`
  display: flex;
  flex-flow: column;
`;

export const SubmitBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const DisplayedInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 15px 0;
`;

export const Education = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  font: Open Sans, sans-serif;
  h6 {
    font-size: 16px;
    line-height: 22px;
  }
  p {
    font-size: 12px;
    line-height: 16px;
  }
`;
export const BottomBtnBox = styled.div`
  display: flex;
  justify-content: left;
`;

export const AddInfo = styled.button`
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
