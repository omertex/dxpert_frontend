import styled from 'styled-components';
import { Colors } from '../../../configuration/Colors';

export const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 29px;
  width: 450px;
  display: flex;
  flex-flow: column;
  background: ${Colors.bg_white};
`;

export const Form = styled.div`
  align-self: stretch;
  height: 215px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Inputs = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-bottom: 62px;
`;

export const Unlock = styled.p`
  font-size: 1rem;
  line-height: 22px;
  color: ${Colors.continue_btn};
  margin: 10px 0 32px;

  :hover {
    cursor: pointer;
  }
`;

export const Disclaimer = styled.div`
  position: relative;
  width: 400px;
  padding-left: 30px;
  box-sizing: border-box;

  p {
    font-size: 10px;
    line-height: 14px;
    text-align: left;
    color: ${Colors.text_black};
    margin: 0;

    a {
      color: ${Colors.continue_btn};
      text-decoration: none;
    }
  }
`;