import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { FilterSelect } from "../../FilterSelect";
import { TextInput } from "../../FilterInputs";
import { DatePicker } from "../../StyledDatePicker";
import { RadioBtn } from "../../StyledRadioBtn";
import { GENDER } from "../../../configuration/TemporaryConsts";
import Info from "../Info";

const dataSelect = ["Ten", "Twenty", "Thirty"];

export default () => {
  const Displayed = () => (
    <Styled.DisplayedInfo>
      <Info title="Country" description="Belarus" />
      <Info title="City" description="Minsk" />
      <Info title="Gender" description="Male" />
      <Info title="Date of birth" description="31 September 1995" />
      <Info title="Phone Number" description="+785785785785" />
    </Styled.DisplayedInfo>
  );

  const Editable = () => (
    <Styled.Form>
      <Styled.DisplayedInfo>
        <Info title="Country">
          <FilterSelect
            data={dataSelect}
            width="290px"
            placeholder="Select Country"
          />
        </Info>
        <Info title="City">
          <FilterSelect
            data={dataSelect}
            width="290px"
            placeholder="Select City"
          />
        </Info>
        <Info title="Gender">
          <RadioBtn data={GENDER} value={GENDER[0].value} />
        </Info>
        <Info title="Date of birth">
          <DatePicker width="190px" />
        </Info>
        <Info title="Phone Number">
          <TextInput width="290px" placeholder="Phone Number" />
        </Info>
      </Styled.DisplayedInfo>
      <Styled.SubmitBox>
        <SubmitBtn text="submit" />
      </Styled.SubmitBox>
    </Styled.Form>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable />}
      name="Contact details"
    />
  );
};
