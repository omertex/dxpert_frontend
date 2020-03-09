import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import { BlueTextBtn } from "../../shared-components/Buttons";
import StyledCheckbox from "../../shared-components/StyledCheckbox";
import { SEARCHED_RESULTS } from "../../configuration/TemporaryConsts";
import ShortInfo from "../../shared-components/ShortInfo";
import SearchResult from "../../shared-components/SearchResult";
import Pagination from "../../shared-components/Pagination";
import FilterBlock from "./FilterBlock";
import { PopUp } from "../../shared-components";
import PopUpContent from "./PopUpContent";
import PopUpFilter from "./PopUpFilter";
import { useLocation } from "react-router-dom";

export default () => {
  const urlParams = useLocation();
  useEffect(() => {
    if (!urlParams.search) setShownFilterPopUp(true);
  }, []);

  const [isShownPopUp, setShownPopUp] = useState(false);
  const [isShownFilterPopUp, setShownFilterPopUp] = useState(false);
  // const [formData, setFormData] = useState({});

  const openPopUp = () => setShownPopUp(true);
  const closePopUp = () => setShownPopUp(false);
  const confirmSend = () => {
    setShownPopUp(false);
    alert("Request is successfuly sent");
  };
  const closeFilterPopUp = () => setShownFilterPopUp(false);

  const searchedResults = SEARCHED_RESULTS.map(
    ({ walletID, gender, age, skills, requested }) => (
      <SearchResult
        walletID={walletID}
        gender={gender}
        age={age}
        skills={skills}
        requested={requested}
        clickedSend={openPopUp}
      />
    )
  );

  return (
    <>
      <Styled.Container>
        <ShortInfo />
        <Styled.SearchInfo>
          <Styled.Found>
            We found {SEARCHED_RESULTS.length} users with similar skills
          </Styled.Found>
          <Styled.Option>
            <StyledCheckbox value="exact-match" />
            <p id="after">exact match</p>
          </Styled.Option>
        </Styled.SearchInfo>
        <Styled.SearchBlock>
          <FilterBlock />
          <Styled.Results>
            {searchedResults}
            <BlueTextBtn text="Send to all" />
            <Pagination />
          </Styled.Results>
        </Styled.SearchBlock>
      </Styled.Container>

      <PopUp isShownPopUp={isShownPopUp}>
        <PopUpContent clickedOK={confirmSend} clickedCancel={closePopUp} />
      </PopUp>

      <PopUpFilter
        isShown={isShownFilterPopUp}
        closeFilter={closeFilterPopUp}
      />
    </>
  );
};
