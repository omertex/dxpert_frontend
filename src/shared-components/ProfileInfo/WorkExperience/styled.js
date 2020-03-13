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

export const DateInfo = styled.div`
  display: flex;
  font-size: 12px;
  margin-right: 20px;
  & span {
    width: 70px;
    margin-right: 8px;
    text-align: left;
  }
`;

export const CheckBox = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: center;
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
