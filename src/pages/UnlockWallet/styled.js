import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';
import { Link } from 'react-router-dom';

export const Container = styled.div`
position: relative;
  width: 1024px;
  margin: 0 auto;
  padding-top: 40px;
  box-sizing: border-box;
`;

export const Paper = styled.div`
  position: absolute;
  z-index: 100;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-flow: column;
  align-items: stretch;
  width: 770px;
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
    margin: 0 0 25px;
    align-self: stretch;
    box-sizing: border-box;
    text-align: center;
  }
`;

export const Notification = styled.p`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: ${Colors.text_black};
  margin: 0 0 22px;

  :hover {
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const CreateNewWallet = styled(Link)`
  text-decoration: none;
`;