import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const Container = styled.div`
  width: 930px;
  margin: 0 auto;
  padding-top: 15px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
`;

export const SearchInfo = styled.div`
  width: 100%;
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  opacity: 0.5;
`;

export const Found = styled.p`
  margin: 0 270px 0 0;
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.text_black};
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

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  p {
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    color: ${Colors.text_black};
  }

  #before {
    margin-right: 10px;
  }

  #after {
    margin-left: 10px;
  }
`;

export const Results = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  margin-left: 30px;
`;