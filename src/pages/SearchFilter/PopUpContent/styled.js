import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";
import Token from "../../../assets/images/token.png";

export const Container = styled.div`
  width: 450px;
  height: 300px;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  letter-spacing: 0.03rem;
  text-align: center;
  margin: 0 0 32px;
  color: ${Colors.text_black};
`;

export const UserInfo = styled.div`
  width: 160px;
  height: 40px;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 1px 0 ${Colors.main_disabled};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
`;

export const ID = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
`;

export const Gender = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 0 0 0 16px;
  margin: 0;
`;

export const Age = styled(Gender)``;

export const Cost = styled.p`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03rem;
  margin: 0 0 24px 0;
  padding-bottom: 20px;
  background: url(${Token}) no-repeat center bottom;
`;

export const Buttons = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;
