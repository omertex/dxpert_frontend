import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const Button = styled.button`
  height: 32px;
  font-size: 14px;
  line-height: 1;
  padding: 0 20px;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) =>
    props.disabled ? Colors.btn_disabled_text : Colors.main_header};
  text-transform: uppercase;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
`;
