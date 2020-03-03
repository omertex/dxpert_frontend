import styled from 'styled-components';
import { Colors } from '../../../configuration/Colors';
import Pen from '../../../assets/images/pen.png';

export const Content = styled.div`
  width: 545px;
  padding: 45px 60px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.03rem;
  margin: 0 0 13px;
`;

export const Note = styled.p`
  position: relative;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.03rem;
  margin: 0 0 13px;

  :before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: -26px;
    width: 16px;
    height: 16px;
    background: url(${ Pen }) no-repeat center center;
  }
`;

export const Alert = styled(Note)`
  margin: 0 0 25px;
  
  :before {
    display: none;
  }
`;

export const KeyDisplay = styled.div`
  width: 100%;
  height: 100px;
  border: 0.5px solid rgba(0, 0, 0, .3);
  border-radius: 4px;
  background: ${Colors.sub_bg};
  padding: 30px 15px;
  box-sizing: border-box;
  margin-bottom: 23px;

  p {
    font-size: 14px;
    line-height: 19px;
    font-weight: 600;
    letter-spacing: 0.03rem;
    color: ${Colors.text_black};
    margin: 0;
    word-wrap: break-word;
    text-align: left;
  }
`;

export const ButtonCover = styled.div`
  align-self: flex-end;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Confirmation = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  margin-bottom: 25px;
`;