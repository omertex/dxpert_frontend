import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const ContinueBtn = styled.button`
  position: relative;
  height: 36px;
  padding: ${props => props.arrow ? "8px 32px 8px 16px" : "8px 32px"};
  border-radius: 2px;
  border: none;
  outline: none;
  background: ${Colors.continue_btn};
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: .03rem;
  text-transform: uppercase;
  color: ${Colors.bg_white};
  transition: all .2s ease;

  :hover {
    cursor: pointer;
  }

  ${props => props.disabled &&`
    background: ${Colors.main_disabled};
    color: ${Colors.btn_disabled_text};
  `}
`;

export const Arrow = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border: 2px solid ${Colors.bg_white};
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  opacity: 0.54;
  border-left-color: transparent;
  border-bottom-color: transparent;
  transition: all .2s ease;

  ${props => props.disabled &&`
    border-right-color: ${Colors.btn_disabled_text};
    border-top-color: ${Colors.btn_disabled_text};
  `}
`;

export const PreviousBtn = styled(ContinueBtn)`
  color: ${Colors.main_disabled};
  padding: 8px 0;
  background: transparent;
`;

export const CreateBtn = styled(PreviousBtn)`
  color: ${Colors.continue_btn};
`;

export const BorderBtn = styled(ContinueBtn)`
  padding: 8px 32px;
  color: ${Colors.continue_btn};
  border: 1px solid ${Colors.continue_btn};
  background: transparent;

  ${props => props.disabled &&`
    border: 1px solid ${Colors.main_disabled};
    color: ${Colors.btn_disabled_text};
  `}
`;

export const UploadBtn = styled(BorderBtn)`
  padding: 8px 16px 8px 48px;
  position: relative;
  background: url(${props => props.src}) no-repeat 16px center;
  margin-bottom: 23px;
  align-self: center;
`;

export const ChooseWayBtn = styled.button`
  width: 200px;
  height: 60px;
  font: 16px Open Sans, sans-serif;
  line-height: 22px;
  letter-spacing: -0.4px;
  color: ${Colors.text_black};
  background: transparent;
  border-radius: ${props => props.second ? "0px 10px 10px 0px" : "10px 0px 0px 10px"};
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  outline: none;

  :hover {
    cursor: pointer;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.24);
    border: 1px solid ${Colors.continue_btn};
  }
`;