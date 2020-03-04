import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";

export const TagsContainer = styled.div`
  max-width: 520px;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
`;

export const Tag = styled.div`
  padding: 5px 9px;
  border-radius: 4px;
  margin: 0 4px 4px 0;
  background-color: ${Colors.tag};
  font: 10px Open Sans, sans-serif;
  line-height: 14px;
  color: ${Colors.text_black};
`;

export const Form = styled.div`
  display: flex;
  flex-flow: column;
`;

export const SubmitBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
