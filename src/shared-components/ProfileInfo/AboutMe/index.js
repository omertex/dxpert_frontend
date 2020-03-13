import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { TextArea } from "../../FilterTextAreas";

export default () => {
  const Displayed = () => (
    <Styled.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, natoque
      integer vehicula vel in nulla. Non sollicitudin ipsum, ac ultricies risus
      integer egestas phasellus. Non sollicitudin ipsum, ac ultricies risus
      integer egestas phasellus.
    </Styled.Text>
  );

  const Editable = () => (
    <Styled.Form>
      <TextArea placeholder="400 characters max" width="431px" />
      <Styled.SubmitBox>
        <SubmitBtn text="submit" />
      </Styled.SubmitBox>
    </Styled.Form>
  );

  return (
    <InfoContainer
      displayed={<Displayed />}
      editable={<Editable />}
      name="About me"
    />
  );
};
