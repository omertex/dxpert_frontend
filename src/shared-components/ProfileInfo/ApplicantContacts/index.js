import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { FilterSelect } from "../../FilterSelect";

const data = [
  { id: "ten", value: "10", title: "Ten" },
  { id: "twenty", value: "20", title: "Twenty" },
  { id: "thirty", value: "30", title: "Thirty" }
];

export default () => {
  const Displayed = () => (
    <>
      <div></div>
    </>
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
