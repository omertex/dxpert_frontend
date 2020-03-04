import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const Container = styled.div`
  width: 100%;
  height: 25px;
  margin-top: auto;
  margin-bottom: 45px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 14px;
  line-height: 1;
  padding: 0 10px;
  border: none;
  outline: none;
  background: transparent;
  color: ${Colors.main_header};
  text-transform: uppercase;

  :hover {
    cursor: pointer;
  }
`;

export const Pages = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 10px;
`;

export const Page = styled.p`
  font-size: 12px;
  line-height: 1;
  margin: 0 9px;
  ${props => props.isCurrent &&`
    font-size: 16px;
  `}

  :hover {
    cursor: pointer;
  }
`;