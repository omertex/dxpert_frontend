import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { FilterSelect } from "../../FilterSelect";
import Info from './Info';

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
      <Info title="About company" description="Software product development company" />
    </Styled.DisplayedInfo>
  );

  const Editable = () => (
    <Styled.Form>
      <FilterSelect data={data} width="290px" placeholder="Select Country" />
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
