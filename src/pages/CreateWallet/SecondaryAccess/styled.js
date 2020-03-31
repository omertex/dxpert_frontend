import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";

export const Paper = styled.div`
  position: absolute;
  z-index: 70;
  top: 30px;
  transform: translateX(-50%);
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 770px;
  margin: 0 auto;
  padding: 29px 160px 25px;
  box-sizing: border-box;
  background: ${Colors.bg_white};
  border-radius: 10px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.24), 0 0 8px rgba(0, 0, 0, 0.12);

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
  width: 350px;
  height: 100%;
  display: flex;
  flex-flow: column;
  background: ${Colors.bg_white};
`;

export const Notification = styled.p`
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  color: ${Colors.text_black};
  margin: 10px 0 32px;

  :hover {
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Phrases = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SinglePhrase = styled.div`
  width: 110px;
  display: flex;
  flex-flow: column;

  #number {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.03rem;
    color: ${Colors.main_disabled};
    align-self: flex-start;
    margin: 0 10px 0 0;
  }
`;

export const InputPhrase = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid ${Colors.main_disabled};
  border-radius: 2px;
  outline: none;
  padding: 5px;
  box-sizing: border-box;
  transition: all 200ms ease;
  text-align: center;

  ${(props) =>
    props.correct &&
    `
    font-weight: 600;
    color: ${Colors.main_header};
    border-color: ${Colors.main_header};
  `}: hover{
    border-color: ${(props) =>
      props.correct ? Colors.main_header : Colors.continue_btn};
  }

  ${(props) =>
    props.error &&
    `
    border-color: ${Colors.error};
  `}
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.error};
  text-align: left;
`;
