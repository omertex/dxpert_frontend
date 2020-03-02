import styled from 'styled-components';
import { Colors } from '../configuration/Colors';

export const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  text-align: center;
  background: ${Colors.main_bg};
`;
export const Content = styled.div`
  width: 100%;
  margin-bottom: auto;
`;