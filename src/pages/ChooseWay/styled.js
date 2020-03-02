import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const Container = styled.div`
  width: 930px;
  margin: 0 auto;
  
  h3,
  h4 {
    margin-top: 54px;
    font: 16px Open Sans, sans-serif;
    font-weight: 600;
    line-height: 22px;
    text-align: center;
    color: ${Colors.text_black};
  }

  h4 {
    font-weight: normal;
    margin-bottom: 12px;
    color: #4b4b4b;
  }
`;

export const RoleWrapper = styled.div`
  width: 404px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const AccountWrapper = styled(RoleWrapper)`
  width: 440px;
  margin-top: 78px;
`;