import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";
import { Link } from "react-router-dom";

export const Paper = styled.div`
  position: absolute;
  z-index: 100;
  top: 30px;
  transform: translateX(-50%);
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 770px;
  // height: 490px;
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

export const Container = styled.div`
  width: 450px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  background: ${Colors.bg_white};
`;

export const Form = styled.div`
  align-self: stretch;
  // height: 215px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Inputs = styled.div`
  position: relative;
  width: 100%;
  min-height: 115px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Unlock = styled(Link)`
  font-size: 1rem;
  line-height: 22px;
  color: ${Colors.continue_btn};
  text-decoration: none;
  margin: 10px 0 32px;
`;

export const Disclaimer = styled.div`
  position: relative;
  width: 400px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;

  p {
    font-size: 10px;
    line-height: 14px;
    text-align: left;
    color: ${Colors.text_black};
    margin: 0 0 0 5px;

    a {
      color: ${Colors.continue_btn};
      text-decoration: none;
    }
  }
`;

export const Tip = styled.div`
  padding: 15px 30px;
  box-sizing: border-box;
  margin: 12px 0;
  border: 1px solid ${Colors.main_disabled};
  border-radius: 4px;
  background: ${Colors.sub_bg};
`;

export const Requirements = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.text_black};
  margin: 0 0 8px;
  text-align: left;
`;

export const Checkers = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Lenght = styled.p`
  position: relative;
  font-size: 10px;
  line-height: 14px;
  color: ${Colors.text_black};
  opacity: 0.5;
  padding-left: 10px;
  margin: 0 25px 0 0;
  transition: all 200ms ease;

  :before {
    display: block;
    position: absolute;
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${Colors.text_black};
    opacity: 0.5;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 200ms ease;
  }

  ${props =>
    props.error &&
    `
    color: ${Colors.error};
    opacity: 1;

    :before {
      background-color: ${Colors.error};
      opacity: 1;
    }
  `};
`;

export const Includes = styled(Lenght)``;

export const ConfirmError = styled.p`
  position: absolute;
  left: 14px;
  bottom: -20px;
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.error};
  text-align: left;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
