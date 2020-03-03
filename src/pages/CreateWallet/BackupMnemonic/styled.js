import styled from 'styled-components';
import { Colors } from '../../../configuration/Colors';

export const Paper = styled.div`
  position: absolute;
  z-index: 80;
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

export const Mnemonics = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const SingleMnemonic = styled.div`
  flex: 25% 1 1;
  display: flex;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;

  #number {
    font-size: 6px;
    font-weight: 600;
    line-height: 8px;
    letter-spacing: 0.03rem;
    color: ${Colors.main_disabled};
    align-self: flex-start;
    margin: 0 10px 0 0;
  }

  #text {
    font-size: 14px;
    line-height: 19px;
    font-weight: 600;
    color: ${Colors.text_black};
    align-self: center;
    margin: 0;
  }
`;

export const ViewMyKey = styled.p`
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.03rem;
  color: ${Colors.continue_btn};
  text-align: right;
  margin: 10px 0;

  :hover {
    cursor: pointer;
  }
`;