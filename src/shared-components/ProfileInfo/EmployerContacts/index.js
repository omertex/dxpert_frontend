import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { FilterSelect } from "../../FilterSelect";
import Info from "../Info";
import { TextInput } from "../../FilterInputs";
import { TextArea } from "../../FilterTextAreas";

const data = [
  { id: "ten", value: "10", title: "Ten" },
  { id: "twenty", value: "20", title: "Twenty" },
  { id: "thirty", value: "30", title: "Thirty" }
];

export default () => {
  const Displayed = () => (
    <Styled.DisplayedInfo>
      <Info title="Company" description="Omertex" />
      <Info title="E-mail" description="Omertex@omertex.com" />
      <Info title="Country" description="USA" />
      <Info title="City" description="New-York" />
      <Info title="Web-site" description="Omertex.com" />
      <Info
        title="About company"
        description="Software product development company"
      />
    </Styled.DisplayedInfo>
  );

  const Editable = () => (
    <Styled.Form>
      <Info title="Company">
        <TextInput width="290px" placeholder="Company" />
      </Info>
      <Info title="E-mail">
        <TextInput width="290px" placeholder="E-mail" />
      </Info>
      <Info title="Country">
        <FilterSelect width="290px" placeholder="Select Country" />
      </Info>
      <Info title="City">
        <FilterSelect width="290px" placeholder="Select City" />
      </Info>
      <Info title="Web-site">
        <TextInput width="290px" placeholder="Web-site" />
      </Info>
      <Info title="About company">
        <TextArea width="390px" placeholder="About company" />
      </Info>
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
