import styled from 'styled-components';
import { Colors } from '../../../../configuration/Colors';

export const Info = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  width: 150px;
  margin: 0;
  padding: 0 10px 0 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Colors.text_black};
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 24px;
  text-align: left;
  color: ${Colors.text_black};
`;