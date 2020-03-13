import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const ContinueBtn = styled.button`
  position: relative;
  height: 36px;
  min-width: 110px;
  padding: ${props => (props.arrow ? "8px 32px 8px 16px" : "8px 32px")};
  border-radius: 2px;
  border: none;
  outline: none;
  background: linear-gradient(90deg, ${Colors.main_disabled} 0%, ${Colors.continue_btn} 0%);
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  color: ${Colors.bg_white};
  transition: all 300ms ease-in;

  :hover {
    cursor: pointer;
  }

  ${props =>
    props.disabled &&
    `
    background: linear-gradient(90deg, ${Colors.main_disabled} 100%, ${Colors.continue_btn} 100%);
    color: ${Colors.btn_disabled_text};
    transition: all 300ms ease-in;

    :hover {
      cursor: not-allowed;
    }
  `}
`;

export const CancelBtn = styled(ContinueBtn)`
  background: ${Colors.main_disabled};
  padding: 8px;
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
  transition: all 0.2s ease;

  ${props =>
    props.disabled &&
    `
    border-right-color: ${Colors.btn_disabled_text};
    border-top-color: ${Colors.btn_disabled_text};
  `}
`;

export const PreviousBtn = styled(ContinueBtn)`
  color: ${Colors.main_disabled};
  padding: 8px 0;
  background: transparent;
`;

export const ActionBtn = styled(PreviousBtn)`
  color: ${Colors.main_header};
  padding: 8px 0;
  text-transform: lowercase;
  font-weight: 400;
  letter-spacing: 0.03rem;
`;

export const BlueTextBtn = styled(ActionBtn)`
  text-transform: uppercase;
`;

export const CreateBtn = styled(PreviousBtn)`
  color: ${Colors.continue_btn};
`;

export const BorderBtn = styled(ContinueBtn)`
  padding: 8px 32px;
  color: ${Colors.continue_btn};
  border: 1px solid ${Colors.continue_btn};
  background: transparent;

  ${props =>
    props.disabled &&
    `
    border: 1px solid ${Colors.main_disabled};
    color: ${Colors.btn_disabled_text};
  `}
`;

export const UploadBtn = styled(BorderBtn)`
  padding: 0;
  position: relative;
  background: url(${props => props.src}) no-repeat 16px center;
  background-blend-mode: saturation;
  margin-bottom: 23px;
  align-self: center;
  ${props => props.disabled &&`
    color: ${Colors.btn_disabled_text};
    border-color: ${Colors.btn_disabled_text};
    background: ${Colors.link_gray};
    border-color: ${Colors.link_gray};
    padding: 8px 32px;
  `}
`;

export const ChooseWayBtn = styled.button`
  width: 200px;
  height: 60px;
  font: 16px Open Sans, sans-serif;
  line-height: 22px;
  letter-spacing: -0.4px;
  color: ${Colors.text_black};
  background: transparent;
  border-radius: ${props =>
    props.second ? "0px 10px 10px 0px" : "10px 0px 0px 10px"};
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  outline: none;

  ${props =>
      props.chosen &&
      `
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.24);
    border: 1px solid ${Colors.continue_btn};
  `}
    :hover {
    cursor: pointer;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.24);
    border: 1px solid ${Colors.continue_btn};
  }
`;

export const SubmitBtn = styled(ContinueBtn)`
  width: ${props => (props.width ? props.width : `130px`)};
  height: 29px;
  flex-shrink: 0;
  padding: 0;
  border-radius: 4px;
  font: 12px Open Sans, sans-serif;
`;

export const DeclineBtn = styled(SubmitBtn)`
  background: transparent;
  color: ${Colors.error};

  ${props =>
    props.disabled &&
    `
    color: ${Colors.btn_disabled_text};

    :hover {
      cursor: not-allowed;
    }
  `}
`;
