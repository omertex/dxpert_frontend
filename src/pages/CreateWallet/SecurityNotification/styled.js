import styled from 'styled-components';
import { Colors } from '../../../configuration/Colors';

export const Container = styled.div`
  position: absolute;
  z-index: 90;
  top: 29px;
  width: 450px;
  display: flex;
  flex-flow: column;
`;

export const Notification = styled.p`
  font-size: 14px;
  line-height: 19px;
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

export const Image = styled.img`
  width: 85px;
  height: 110px;
  object-fit: contain;
  object-position: center center;
  align-self: center;
`;