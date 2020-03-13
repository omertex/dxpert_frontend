import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { DatePicker } from "../../StyledDatePicker";
import { TextInput } from "../../FilterInputs";
import StyledCheckbox from "../../StyledCheckbox";
import Info from "../Info";

export default () => {
  const Displayed = () => (
    <React.Fragment>
      <Styled.DisplayedInfo>
        <Info title="Start of work">
          <Styled.DateInfo>
            <span>July</span>
            2019
          </Styled.DateInfo>
        </Info>
        <Info title="End">
          <Styled.DateInfo>
            <span>September</span>
            2019
          </Styled.DateInfo>
        </Info>
        <Info title="Organization" description="Omertex" />
        <Info title="Position" description="Designer" />
      </Styled.DisplayedInfo>
      <Styled.BottomBtnBox>
        <Styled.AddInfo>add Work Experience</Styled.AddInfo>
      </Styled.BottomBtnBox>
    </React.Fragment>
  );

  const Editable = () => (
    <Styled.Form>
      <Styled.DisplayedInfo>
        <Info title="Start of work">
          <DatePicker width="150px" />
        </Info>
        <Info title="End">
          <DatePicker width="150px" />
          <Styled.CheckBox>
            <StyledCheckbox label="To present" />
          </Styled.CheckBox>
        </Info>
        <Info title="Organization">
          <TextInput width="290px" placeholder="Organization" />
        </Info>
        <Info title="Position">
          <TextInput width="290px" placeholder="Position" />
        </Info>
      </Styled.DisplayedInfo>
      <Styled.BottomBtnBox>
        <Styled.AddInfo>add Work Experience</Styled.AddInfo>
      </Styled.BottomBtnBox>
      <Styled.SubmitBox>
        <SubmitBtn text="submit" />
      </Styled.SubmitBox>
    </Styled.Form>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable />}
      name="Work Experience"
    />
  );
};
