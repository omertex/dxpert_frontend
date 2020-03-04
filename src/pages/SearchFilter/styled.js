import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-top: 15px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
`;

export const UserBlock = styled.div`
  height: 36px;
  width: 100%;
  margin-bottom: 10px;
  background: ${Colors.main_disabled};
`;

export const SearchBlock = styled.div`
  width: 100%;
  display: flex;
`;

export const Filters = styled.div`
  width: 290px;
  padding: 20px 25px;
  border-radius: 8px;
  background: ${Colors.bg_white};
  display: flex:
  flex-flow: column;
  box-shadow: 0 0 1px ${Colors.main_disabled};

  #label {
    font-size: 16px;
    line-height: 22px;
    margin: 0 0 12px;
    text-align: left;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 16px;
`;