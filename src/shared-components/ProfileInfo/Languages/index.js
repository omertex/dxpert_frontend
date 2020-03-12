import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { MultiSelect } from "../../MultiSelect";
import { LANGUAGES } from "../../../configuration/TemporaryConsts";

export default () => {
  const Displayed = () => (
    <Styled.TagsContainer>
      {LANGUAGES.map(item => (
        <Styled.Tag key={item.value}>{item.label}</Styled.Tag>
      ))}
    </Styled.TagsContainer>
  );

  const Editable = () => (
    <Styled.Form>
      <MultiSelect
        data={LANGUAGES}
        placeholder="Enter language"
        width="431px"
      />
      <Styled.SubmitBox>
        <SubmitBtn text="submit" />
      </Styled.SubmitBox>
    </Styled.Form>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable />}
      name="Languages"
    />
  );
};
