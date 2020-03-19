import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

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

export const Options = styled.div`
  width: 100%;
  display: flex;
  padding-left: 20px;
`;

export const Results = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  margin-left: 30px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Filters = styled.div`
  width: 290px;
  padding: 20px 25px;
  margin-bottom: auto;
  border-radius: 8px;
  background: ${Colors.bg_white};
  display: flex;
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

export const Stub = styled.div`
  margin: auto;
  color: #767676;
  font-size: 14px;
`;
