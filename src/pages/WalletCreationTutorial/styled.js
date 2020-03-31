import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-top: 40px;
  box-sizing: border-box;
`;

export const PopUpContent = styled.div`
  position: relative;
  width: 500px;
  height: 420px;
  padding: 50px 75px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const UpperProgressBar = styled.div`
  width: 460px;
  height: 5px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;

export const LowerProgressBar = styled(UpperProgressBar)`
  top: calc(100% - 5px);
`;

export const Segment = styled.div`
  width: 90px;
  height: 100%;
  background: ${Colors.main_disabled};
  flex-grow: 0;
  transition: all 300ms ease-in;

  ${(props) =>
    props.active &&
    `
    background: ${Colors.main_header};
  `}
`;
