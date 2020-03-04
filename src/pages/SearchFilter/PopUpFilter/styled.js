import styled from 'styled-components';
import { Colors } from '../../../configuration/Colors';
import CloseIcon from '@material-ui/icons/Close';

export const Close = styled(CloseIcon)`
  color: ${Colors.main_disabled};
  transition: all 200ms ease;
  :hover {
    color: ${Colors.main_header};
  }
`;

export const Underlayer = styled.div`
  position: fixed;
  z-index: 200;
  width: 100%;
  // height: 100%;
  top: 80px;
  left: 0;
  background: rgba(0, 0, 0, .3);
  backdrop-filter: blur(4px);
`;

export const Paper = styled.div`
  position: absolute;
  z-index: 210;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 200px;
  background: ${Colors.bg_white};
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.12);
  transition: all 300ms ease;
`;

export const Filters = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0 0 0;
  display: flex:
  flex-flow: column;

  #label {
    font-size: 16px;
    line-height: 22px;
    margin: 0 0 12px;
    text-align: left;
    padding-left: 16px;
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  p {
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    color: ${Colors.text_black};
  }

  #before {
    margin-right: 10px;
  }

  #after {
    margin-left: 10px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h3 {
    margin-right: auto;
  }
`;

export const Input = styled.div`
  flex-basis: 290px;
  flex-grow: 0;
  display: flex;
  flex-flow: column;
  margin-bottom: 16px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 85px;

  #skills {
    flex-basis: 660px;
  }
`;