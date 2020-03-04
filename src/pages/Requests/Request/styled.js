import styled from 'styled-components';
import { Colors } from '../../../configuration/Colors';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';

export const Request = styled.div`
  width: 100%;
  height: 64px;
  background; ${Colors.bg_white};
  border: 1px solid transparent;
  border-radius: 2px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;

  ${props => props.status === "completed" &&`
    border-color: ${Colors.success};
  `}

  ${props => props.status === "failed" &&`
    border-color: red;
  `}
`;

export const Completed = styled(CheckCircleOutlinedIcon)`
  color: ${Colors.success};
`;

export const Failed = styled(CancelOutlinedIcon)`
  color: red;
`;

export const Pending = styled(QueryBuilderOutlinedIcon)`
  color: ${Colors.main_disabled};
`;

export const WalletID = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  width: 80px;
  flex-shrink: 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.87);
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
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.53);
  padding: 8px 20px 8px 8px;
  box-sizing: border-box;
  margin: 0 auto 0 0;
  text-align: left;
  overflow: hidden;
`;

export const Age = styled(Gender)``;