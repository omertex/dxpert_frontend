import styled from 'styled-components';
import { Colors } from '../../configuration/Colors';

export const ContinueBtn = styled.button`
  position: relative;
  height: 36px;
  padding: 8px 32px 8px 16px;
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