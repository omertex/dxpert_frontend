import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Request = styled.div`
  width: 100%;
  min-height: 64px;
  background: ${Colors.bg_white};
  border: 1px solid transparent;
  border-radius: 2px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  transition: all 300ms ease;

  :hover {
    cursor: pointer;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12),
      0px 9px 12px rgba(0, 0, 0, 0.14);
  }

  ${(props) =>
    props.status === "completed" &&
    `
    border-color: ${Colors.success};
  `}

  ${(props) =>
    props.status === "failed" &&
    `
    border-color: red;
  `}
`;

export const Completed = styled(CheckCircleOutlinedIcon)`
  color: ${Colors.success};
  margin-right: 17px;
`;

export const Failed = styled(CancelOutlinedIcon)`
  color: red;
  margin-right: 17px;
`;

export const Pending = styled(QueryBuilderOutlinedIcon)`
  color: ${Colors.main_disabled};
  margin-right: 17px;
`;

export const WalletID = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  width: 80px;
  flex-shrink: 0;
  margin: 0;
  margin-right: 30px;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
`;

export const Gender = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 8px;
  box-sizing: border-box;
  text-transform: uppercase;
  margin: 0;
`;

export const Skills = styled.p`
  display: block;
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.53);
  padding: 8px 20px 8px 8px;
  box-sizing: border-box;
  margin: 0 auto 0 30px;
  text-align: left;
  overflow: hidden;
`;

export const Age = styled(Gender)``;

export const Time = styled(Skills)`
  padding: 0;
  margin: 0 0 0 20px;
  width: 60px;
  flex-shrink: 0;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  white-space: no-wrap;
`;

export const Expand = styled(ExpandMoreIcon)`
  color: ${Colors.main_disabled};
  padding: 0 8px;
  transform: rotate(0deg);
  transition: all 200ms linear;

  ${(props) =>
    props.expanded &&
    `
    transform: rotate(180deg);
  `}
`;
