import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../../../shared-components/ProfileInfo/InfoContainer";
import { SubmitBtn } from "../../../shared-components/Buttons";
import { FilterSelect } from "../../../shared-components/FilterSelect";
import Info from "../Info";
import { TextInput } from '../../../shared-components/FilterInputs';
import { MultiSelect } from '../../../shared-components/MultiSelect';
import { TextArea } from '../../../shared-components/FilterTextAreas';

const InfoBlock = () => {

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
      <Info title="Company">
        <TextInput width="290px" />
      </Info>
      <Info title="E-mail">
        <TextInput width="290px" />
      </Info>
      <Info title="Country">
        <MultiSelect width="290px" />
      </Info>
      <Info title="City">
        <MultiSelect width="290px" />
      </Info>
      <Info title="Web-site">
        <TextInput width="290px" />
      </Info>
      <Info title="About company">
        <TextArea width="390px" />
      </Info>
      <Styled.SubmitBox>
        <SubmitBtn 
          text="submit" 
        />
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

export default InfoBlock;
