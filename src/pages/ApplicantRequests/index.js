import React, { useState } from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import Pagination from "../../shared-components/Pagination";
import InboxRequest from "./InboxRequest";
import OutboxRequest from "./OutboxRequest";
import { APPLICANT_REQUESTS } from "../../configuration/TemporaryConsts";
import PageName from "../../shared-components/PageName";
import { TabsNav, TabPanel } from "../../shared-components/StyledTabs";
import { PopUp } from "../../shared-components";
import PopUpAllowOne from "./PopUpAllowOne";
import PopUpAllowAll from "./PopUpAllowAll";
import PopUpDecline from "./PopUpDecline";
import { connect } from "react-redux";

const ApplicantRequest = ({ address, avatar, name }) => {
  const [value, setValue] = useState(0);
  const [isShownPopUp, setShownPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState("one");
  const openPopUpOne = () => {
    setPopUpType("one");
    setShownPopUp(true);
  };
  const openPopUpAll = () => {
    setPopUpType("all");
    setShownPopUp(true);
  };
  const openPopUpDecline = () => {
    setPopUpType("decline");
    setShownPopUp(true);
  };
  const closePopUp = () => setShownPopUp(false);
  const confirmOne = () => {
    setShownPopUp(false);
    alert("Request is successfuly sent");
  };
  const confirmAll = () => {
    setShownPopUp(false);
    alert("Request is successfuly sent");
  };
  const confirDecline = () => {
    setShownPopUp(false);
    alert("Decline is successfuly");
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsData = [
    {
      label: "Inbox",
      index: 0,
    },
    {
      label: "Outbox",
      index: 1,
    },
  ];

  const inboxRequests = APPLICANT_REQUESTS.map(
    ({ status, company, skills, time }) => (
      <InboxRequest
        key={company}
        status={status}
        company={company}
        skills={skills}
        time={time}
        allowSend={openPopUpOne}
        declineSend={openPopUpDecline}
      />
    )
  );

  const outboxRequests = APPLICANT_REQUESTS.map(
    ({ status, company, skills, time }) => (
      <OutboxRequest
        key={company}
        status={status}
        company={company}
        skills={skills}
        time={time}
      />
    )
  );

  function getPopUpByType() {
    switch (popUpType) {
      case "one":
        return (
          <PopUpAllowOne clickedOK={confirmOne} clickedCancel={closePopUp} />
        );
      case "all":
        return (
          <PopUpAllowAll clickedOK={confirmAll} clickedCancel={closePopUp} />
        );
      case "decline":
        return (
          <PopUpDecline clickedOK={confirDecline} clickedCancel={closePopUp} />
        );
    }
  }

  return (
    <>
      <Styled.Container>
        <ShortInfo avatar={avatar} name={name} address={address} />
        <PageName pageName={"Requests"} />
        <TabsNav value={value} callback={handleChange} data={tabsData} />
        <Styled.Requests>
          <TabPanel value={value} index={0}>
            {inboxRequests}
            <Styled.BottomBtn>
              <Styled.AcceptAll onClick={openPopUpAll}>
                Accept All
              </Styled.AcceptAll>
            </Styled.BottomBtn>
            <Pagination />
          </TabPanel>
          <TabPanel value={value} index={1}>
            {outboxRequests}
            <Styled.BottomBtn>
              <Styled.AcceptAll>Accept All</Styled.AcceptAll>
            </Styled.BottomBtn>
            <Pagination />
          </TabPanel>
        </Styled.Requests>
      </Styled.Container>

      <PopUp isShownPopUp={isShownPopUp}>{getPopUpByType()}</PopUp>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
    avatar: state.applicant.details.avatar,
    name: state.applicant.details.name,
  };
};

export default connect(mapStateToProps)(ApplicantRequest);
