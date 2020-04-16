import React from "react";
import * as Styled from "./styled";

export default ({ disabledPrev, disabledNext, prevPage, nextPage }) => {
  return (
    <Styled.Container>
      <Styled.Button disabled={disabledPrev} onClick={prevPage}>
        previous
      </Styled.Button>
      <Styled.Button disabled={disabledNext} onClick={nextPage}>
        next
      </Styled.Button>
    </Styled.Container>
  );
};
