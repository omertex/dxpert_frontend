import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const Footer = styled.div`
  width: 100%;
  height: 84px;
  background: ${Colors.main_footer};
`;

export const Container = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const Copyright = styled.p`
  font-size: 8px;
  line-height: 11px;
  color: ${Colors.text_footer};
  margin-bottom: 0;
`;