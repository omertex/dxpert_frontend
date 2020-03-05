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
  position: relative;
  width: 100%;
  flex-grow: 1;
  margin-bottom: auto;
  background: ${Colors.sub_bg};
  display: flex;
  flex-flow: column;
`;