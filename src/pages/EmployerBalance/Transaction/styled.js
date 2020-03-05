import styled from 'styled-components';
import { Colors } from '../../../configuration/Colors';

export const Transaction = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 10px;
  line-height: 14px;
  padding: 8px 0;

  p {
    flex-grow: 1;
  }

  #date {
    width: 55px;
    margin-right: 5px;
  }

  #id {
    width: 130px;
    margin-right: 5px;
  }

  #type {
    width: 50px;
    margin-right: 5px;
  }

  #value {
    width: 50px;
    margin-right: 5px;
  }

  #status {
    width: 60px;
    margin-right: 5px;
    color: ${props => props.status === "Completed" ? 'green' : 'red'};
  }

  #txFee {
    width: 50px;
  }
`;

export const Header = styled(Transaction)`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 16px;
  padding: 0;
  color: ${Colors.text_black};

  #status {
    color: ${Colors.text_black};
  }
`;