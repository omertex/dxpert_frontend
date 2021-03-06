import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";
import Token from "../../../assets/images/token.png";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  margin: 0 0 12px;
  color: ${Colors.text_black};
`;

export const UserInfo = styled.div`
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
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
`;

export const SuccessMessage = styled.p`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03rem;
  margin: 0 0 24px 0;
  padding-bottom: 20px;
  color: ${Colors.success};
`;

export const ErrorMessage = styled(SuccessMessage)`
  color: ${Colors.error};
`;

export const Buttons = styled.div`
  width: 250px;
  display: flex;
  margin-bottom: 10px;
  justify-content: ${(props) => (props.centered ? "center" : "space-between")};
`;

export const Loading = styled(CircularProgress)`
  margin: 10px 0 40px 0;
  color: ${Colors.main_header} !important;
`;
