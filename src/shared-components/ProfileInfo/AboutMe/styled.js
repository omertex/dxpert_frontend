import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";

export const Text = styled.div`
  max-width: 520px;
  font: 16px Open Sans, sans-serif;
  line-height: 22px;
  letter-spacing: -0.4px;
  text-align: left;
  color: ${Colors.text_black};
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
`;

export const SubmitBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
