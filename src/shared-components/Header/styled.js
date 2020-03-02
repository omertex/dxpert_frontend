import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background: ${Colors.main_header};
`;

export const Container = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;