import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-top: 40px;
  box-sizing: border-box;
`;

export const Paper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 770px;
  height: 490px;
  margin: 0 auto;
  padding: 29px 160px 25px;
  box-sizing: border-box;
  background: ${Colors.bg_white};
  border-radius: 10px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.24), 0 0 8px rgba(0, 0, 0, 0.12);
  overflow: hidden;

  h2 {
    font-size: 24px;
    line-height: 33px;
    font-weight: 600;
    color: ${Colors.text_black};
    margin: 0 0 35px;
  }

  h3 {
    font-size: 1rem;
    line-height: 22px;
    font-weight: 600;
    color: ${Colors.text_black};
    margin: 0 0 27px;
    align-self: stretch;
    box-sizing: border-box;
    text-align: left;
  }
`;
