import React from "react";
import * as Styled from "./styled";
import InfoContainer from "../InfoContainer";
import { SubmitBtn } from "../../Buttons";
import { TextInput } from "../../FilterInputs";
import { FilterSelect } from "../../FilterSelect";
import Info from "../Info";

export default () => {
  const Displayed = () => (
    <React.Fragment>
      <Styled.DisplayedInfo>
        <Info title="2016">
          <Styled.Education>
            <h6>Belarusian State University</h6>
            <p>Faculty of social and cultural communication</p>
            <p>Bachelor’s Degree</p>
            <p>Design</p>
          </Styled.Education>
        </Info>
        <Info title="2017">
          <Styled.Education>
            <h6>Belarusian State University</h6>
            <p>Faculty of social and cultural communication</p>
            <p>Bachelor’s Degree</p>
            <p>Design</p>
          </Styled.Education>
        </Info>
      </Styled.DisplayedInfo>
      <Styled.BottomBtnBox>
        <Styled.AddInfo>add Education</Styled.AddInfo>
      </Styled.BottomBtnBox>
    </React.Fragment>
  );

  const Editable = () => (
    <Styled.Form>
      <Styled.DisplayedInfo>
        <Info title="Level">
          <FilterSelect width="290px" placeholder="Level or Type" />
        </Info>
        <Info title="Educational institution">
          <TextInput width="290px" placeholder="Name or abbreviation" />
        </Info>
        <Info title="Department">
          <TextInput width="290px" placeholder="Department" />
        </Info>
        <Info title="Specialization">
          <TextInput width="290px" placeholder="Specialization" />
        </Info>
        <Info title="Year of graduation">
          <TextInput width="85px" placeholder="Year" />
        </Info>
      </Styled.DisplayedInfo>
      <Styled.BottomBtnBox>
        <Styled.AddInfo>add one more place of study</Styled.AddInfo>
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
      name="Education"
    />
  );
};
