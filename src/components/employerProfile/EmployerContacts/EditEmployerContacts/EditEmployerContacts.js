import React from "react";
import * as Styled from "./EditEmployerContacts.styled";
import { TextInput } from "../../../../shared-components/FilterInputs";
import { FilterSelect } from "../../../../shared-components/FilterSelect";
import { TextArea } from "../../../../shared-components/FilterTextAreas";
import {
  SubmitBtn,
  FileUploadBtn,
} from "../../../../shared-components/Buttons";
import Info from "../../../../shared-components/ProfileInfo/Info";
import imgBase64 from "../../../../services/imgBase64";

const EditEmployerContacts = ({
  changeHanlder,
  handleSubmit,
  contacts,
  countries,
  cities,
}) => {
  const avatarChangeHandler = async (e) => {
    const photo = await imgBase64(e.target.files[0]);
    changeHanlder({ target: { name: "photo", value: photo } });
  };

  return (
    <Styled.Form>
      <Info title="Avatar">
        <FileUploadBtn onChange={avatarChangeHandler}>
          select profile photo
        </FileUploadBtn>
      </Info>
      <Info title="Company">
        <TextInput
          name="organisation"
          value={contacts["organisation"]}
          onChange={changeHanlder}
          width="290px"
        />
      </Info>
      <Info title="E-mail">
        <TextInput
          name="email"
          value={contacts["email"]}
          onChange={changeHanlder}
          width="290px"
        />
      </Info>
      <Info title="Country">
        <FilterSelect
          name="country"
          changed={changeHanlder}
          value={contacts["country"]}
          data={countries}
          width="290px"
          placeholder="Select Country"
        />
      </Info>
      <Info title="City">
        <FilterSelect
          name="city"
          changed={changeHanlder}
          value={contacts["city"]}
          data={cities}
          width="290px"
          placeholder="Select City"
        />
      </Info>
      <Info title="Web-site">
        <TextInput
          name="website"
          value={contacts["website"]}
          onChange={changeHanlder}
          width="290px"
        />
      </Info>
      <Info title="About company">
        <TextArea
          name="about"
          value={contacts["about"]}
          changed={changeHanlder}
          width="390px"
        />
      </Info>
      <Styled.SubmitBox>
        <SubmitBtn clicked={handleSubmit} text="submit" />
      </Styled.SubmitBox>
    </Styled.Form>
  );
};

export default EditEmployerContacts;
