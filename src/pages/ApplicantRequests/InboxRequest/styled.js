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
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12),
      0px 9px 12px rgba(0, 0, 0, 0.14);
  }
`;

export const Company = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  text-align: left;
  text-decoration: underline;
  min-width: 130px;
  flex-shrink: 0;
  margin: 0;
  margin: 0 30px 0 35px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Skills = styled.p`
  display: block;
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.53);
  padding: 8px 20px 8px 8px;
  box-sizing: border-box;
  margin: 0 auto 0 0;
  text-align: left;
  overflow: hidden;
`;

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

export const Buttons = styled.div`
  min-width: 230px;
  margin-left: 12px;
  display: flex;
  justify-content: space-between;
`;
