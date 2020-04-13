import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const Container = styled.div`
  width: 930px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
`;

export const ProfileInfo = styled.div`
  display: flex;
  padding: 55px 0 42px 80px;
  align-items: center;

  h2 {
    width: auto;
    font: 24px Open Sans, sans-serif;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: -0.4px;
    text-align: left;
    color: ${Colors.text_black};
    margin: 0 100px 0 15px;
  }
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
