import styled from 'styled-components';
import { Colors } from '../../../configuration/Colors';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 16px;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  padding-left: 20px;
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