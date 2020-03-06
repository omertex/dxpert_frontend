import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";
import Token from "../../../assets/images/token.png";

export const Container = styled.div`
  width: 450px;
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
  margin: 0 0 14px;
  color: ${Colors.text_black};
`;

export const Companies = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  margin-bottom: 19px;
`;

export const CompanyInfo = styled.div`
  height: 28px;
  padding: 0 13px;
  margin: 0 6px 4px 6px;
  box-sizing: border-box;
  border-radius: 4px;
  line-height: 24px;
  font: 16px Roboto, sans-serif;
  box-shadow: 0 1px 0 ${Colors.main_disabled};
  display: flex;
  align-items: center;
`;

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
