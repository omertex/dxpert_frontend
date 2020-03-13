import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 13px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
`;

export const NikName = styled.div`
  font: 12px Open Sans, sans-serif;
  line-height: 24px;
  color: ${Colors.text_black};
  padding-left: 13px;
`;

export const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  font: 16px Open Sans, sans-serif;
  line-height: 22px;
  letter-spacing: -0.4px;
  color: ${Colors.text_black};
  text-align: left;
`;
