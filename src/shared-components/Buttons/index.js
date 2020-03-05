import React from "react";
import * as Styled from "./styled.js";

export const ContinueBtn = ({ text, disabled, clicked, arrow }) => (
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
  <Styled.ChooseWayBtn 
    chosen={chosen}
    onClick={clicked} 
    second={second}
  >
    {text}
  </Styled.ChooseWayBtn>
);

export const UploadBtn = ({ text, disabled, clicked, src }) => (
  <Styled.UploadBtn src={src} onClick={clicked} disabled={disabled}>
    {text}
  </Styled.UploadBtn>
);

export const CreateBtn = ({ text, disabled, clicked }) => (
  <Styled.CreateBtn onClick={clicked} disabled={disabled}>
    {text}
  </Styled.CreateBtn>
)

export const ActionBtn = ({ text, disabled, clicked }) => (
  <Styled.ActionBtn 
    onClick={ clicked }
    disabled={ disabled }>
    { text }
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

export const BlueTextBtn = ({ text, disabled, clicked }) => (
  <Styled.BlueTextBtn 
    onClick={ clicked }
    disabled={ disabled }>
    { text }
  </Styled.BlueTextBtn>
)
