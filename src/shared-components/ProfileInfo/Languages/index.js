import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { MultiSelect } from "../../MultiSelect";

const data = [
  { id: "en", title: "English" },
  { id: "ru", title: "Russian" },
  { id: "be", title: "Belorussian" },
  { id: "ab", title: "Abkhazian" },
  { id: "af", title: "Afrikaans" }
];

export default () => {
  const Displayed = () => (
    <Styled.TagsContainer>
      {data.map(item => (
        <Styled.Tag key={item.id}>{item.title}</Styled.Tag>
      ))}
    </Styled.TagsContainer>
  );

  const Editable = () => (
    <Styled.Form>
      <MultiSelect data={data} placeholder="Enter language" width="431px" />
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
