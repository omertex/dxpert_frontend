import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const Container = styled.div`
  width: 930px;
  margin: 0 auto;
  padding-top: 15px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
`;

export const InfoBlock = styled.div`
  width: 100%;
  display: flex;
`;

export const WalletDetails = styled.div`
  width: 290px;
  margin-right: 30px;
  display: flex;
  flex-flow: column;
`;

export const Header = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 15px;
  text-align: left;
  padding-left: 80px;
`;

export const TransactionsHeader = styled(Header)`
  padding: 0;
`;

export const Transactions = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column;
`;

export const Details = styled.div`
  padding: 20px 25px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${Colors.bg_white};
  border: 1px solid ${Colors.main_disabled};
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Balance = styled.div`
  width: 100%;
  height: 130px;
  border-bottom: 1px solid ${Colors.main_disabled};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  #tokens {
    font-size: 24px;
    line-height: 33px;
    font-weight: 600;
  }

  span {
    font-size: 10px;
    line-height: 14px;
    opacity: 0.7;
  }
`;

export const Last = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 18px;
`;

export const Separator = styled.div`
  width: 0;
  height: 40px;
  border: 0.5px solid ${Colors.main_disabled};
`;

export const LastTransaction = styled.div`
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;

  p {
    font-size: 12px;
    line-height: 16px;
    opacity: 0.3;
    margin: 0 0 23px;
  }

  span {
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
  }
`;

export const TransactionsBlock = styled.div`
  width: 100%;
  padding: 20px 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${Colors.bg_white};
  border: 1px solid ${Colors.main_disabled};
  display: flex;
  flex-flow: column;
`;