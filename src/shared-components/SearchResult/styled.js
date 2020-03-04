import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const Container = styled.div`
  width: 100%;
  height: 64px;
  background: ${Colors.bg_white};
  border-radius: 2px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0 0 1px ${Colors.main_disabled};
`;

export const WalletID = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  width: 80px;
  flex-shrink: 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.87);
`;

export const Gender = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 8px;
  box-sizing: border-box;
  text-transform: uppercase;
  margin: 0;
`;

export const Skills = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.53);
  padding: 8px 20px 8px 8px;
  box-sizing: border-box;
  margin: 0 auto 0 0;
  text-align: left;
  overflow: hidden;
`;

export const Age = styled(Gender)``;