import React, { useState } from "react";
import * as Styled from "./styled";

export default ({ displayed, editable, name }) => {
  const [status, changeStatus] = useState(false);

  return (
    <Styled.Container>
      <Styled.Info>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Edit onClick={() => changeStatus(!status)}>
          {status ? `close edit form` : `edit ${name.toLowerCase()}`}
        </Styled.Edit>
      </Styled.Info>
      <Styled.Component>{status ? editable : displayed}</Styled.Component>
    </Styled.Container>
  );
};
