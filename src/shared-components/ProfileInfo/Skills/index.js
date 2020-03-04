import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { MultiSelect } from "../../MultiSelect";

const data = [
  { id: "ra", title: "React" },
  { id: "rd", title: "Redux" },
  { id: "bp", title: "Bootstrap" },
  { id: "mui", title: "Material UI" },
  { id: "js", title: "JavaScript" },
  { id: "jq", title: "JQuery" },
  { id: "css", title: "Css" },
  { id: "html", title: "HTML" }
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
      <MultiSelect data={data} placeholder="Enter skill" width="431px" />
      <Styled.SubmitBox>
        <SubmitBtn text="submit" />
      </Styled.SubmitBox>
    </Styled.Form>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable />}
      name="Skills"
    />
  );
};
