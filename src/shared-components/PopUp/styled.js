import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const Underlayer = styled.div`
  position: fixed;
  z-index: 200;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
`;

export const PopUpContent = styled.div`
  position: absolute;
  z-index: 210;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 200px;
  min-height: 200px;
  background: ${Colors.bg_white};
  border-radius: 10px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.12);
  transition: all 300ms ease;

  ${(props) =>
    !props.visible &&
    `
    display: none;
  `}
`;
