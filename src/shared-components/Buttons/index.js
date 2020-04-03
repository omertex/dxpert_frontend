import React from "react";
import * as Styled from "./styled.js";
import IconButton from "@material-ui/core/IconButton";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { withStyles } from "@material-ui/core/styles";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import randomIdString from "../../services/randomIdString";

export const ContinueBtn = ({ text, disabled, clicked, arrow, children }) => (
  <Styled.ContinueBtn onClick={clicked} disabled={disabled} arrow={arrow}>
    {text}
    {arrow ? <Styled.Arrow font-size="small" disabled={disabled} /> : null}
  </Styled.ContinueBtn>
);

export const PreviousBtn = ({ text, disabled, clicked }) => (
  <Styled.PreviousBtn onClick={clicked} disabled={disabled}>
    {text}
  </Styled.PreviousBtn>
);

export const CancelBtn = ({ text, disabled, clicked }) => (
  <Styled.CancelBtn onClick={clicked} disabled={disabled}>
    {text}
  </Styled.CancelBtn>
);

export const BorderBtn = ({ text, disabled, clicked }) => (
  <Styled.BorderBtn onClick={clicked} disabled={disabled}>
    {text}
  </Styled.BorderBtn>
);

export const ChooseWayBtn = ({ text, clicked, second, chosen }) => (
  <Styled.ChooseWayBtn chosen={chosen} onClick={clicked} second={second}>
    {text}
  </Styled.ChooseWayBtn>
);

export const UploadBtn = ({ text, disabled, clicked, src, children }) => (
  <Styled.UploadBtn src={src} onClick={clicked} disabled={disabled}>
    {text}
    {children}
  </Styled.UploadBtn>
);

export const CreateBtn = ({ text, disabled, clicked }) => (
  <Styled.CreateBtn onClick={clicked} disabled={disabled}>
    {text}
  </Styled.CreateBtn>
);

export const ActionBtn = ({ text, disabled, clicked }) => (
  <Styled.ActionBtn onClick={clicked} disabled={disabled}>
    {text}
  </Styled.ActionBtn>
);

export const SubmitBtn = ({ text, disabled, clicked, width }) => (
  <Styled.SubmitBtn
    type="submit"
    onClick={clicked}
    disabled={disabled}
    width={width}
  >
    {text}
  </Styled.SubmitBtn>
);

export const DeclineBtn = ({ text, disabled, clicked, width }) => (
  <Styled.DeclineBtn
    type="submit"
    onClick={clicked}
    disabled={disabled}
    width={width}
  >
    {text}
  </Styled.DeclineBtn>
);

export const BlueTextBtn = ({ text, disabled, clicked }) => (
  <Styled.BlueTextBtn onClick={clicked} disabled={disabled}>
    {text}
  </Styled.BlueTextBtn>
);

export const RightCloseBtn = withStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
  },
})((props) => (
  <IconButton
    onClick={props.clicked}
    color="standard"
    aria-label={props.label}
    {...props}
  >
    <CloseRoundedIcon />
  </IconButton>
));

export const LogOutBtn = ({ text, disabled, clicked, width }) => (
  <Styled.LogOutBtn onClick={clicked} disabled={disabled} width={width}>
    <ExitToAppRoundedIcon />
    {text}
  </Styled.LogOutBtn>
);

export const FileUploadBtn = ({ children, ...otherProps }) => {
  const id = "file-upload_" + randomIdString();
  return (
    <>
      <input style={{ display: "none" }} id={id} type="file" {...otherProps} />
      <label htmlFor={id}>
        <Styled.FileUploadBtn>{children}</Styled.FileUploadBtn>
      </label>
    </>
  );
};
