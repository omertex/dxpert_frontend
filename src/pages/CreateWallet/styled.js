import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-top: 40px;
  box-sizing: border-box;
`;

export const Paper = styled.div`
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

  h2 {
    font-size: 24px;
    line-height: 33px;
    font-weight: 600;
    color: ${Colors.text_black};
    margin: 0 0 35px;
  }

  h3 {
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: ${Colors.text_black};
    margin: 0 0 27px;
    align-self: stretch;
    padding-left: 50px;
    box-sizing: border-box;
    text-align: left;
  }
`;

export const Form = styled.div`
  align-self: stretch;
  height: 215px;
  display: flex;
  flex-flow: column;
`;

export const Inputs = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;