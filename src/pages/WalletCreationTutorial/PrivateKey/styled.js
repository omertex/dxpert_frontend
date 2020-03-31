import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";
import PrivateKey from "../../../assets/images/private-key.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  z-index: 20;
  top: 50px;
  bottom: 50px;
  left: 75px;
  right: 75px;
  display: flex;
  flex-flow: column;
  background: ${Colors.bg_white};
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.03rem;
  color: ${Colors.text_black};
  margin: 0 0 28px;
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
  letter-spacing: 0.03rem;
  color: ${Colors.text_black};
  margin: 0 0 28px;
`;

export const Text = styled.h2`
  font-size: 14px;
  font-weight: normal;
  line-height: 19px;
  letter-spacing: 0.03rem;
  text-align: left;
  color: ${Colors.text_black};
  margin: 0 0 auto;
  padding-right: 130px;
  box-sizing: border-box;
  background: url(${PrivateKey}) no-repeat right center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SkipTutorial = styled(Link)`
  font-size: 10px;
  line-height: 14px;
  color: ${Colors.main_disabled};
  text-decoration: none;
`;

export const CreateWallet = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
`;
