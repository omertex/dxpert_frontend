import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
// import Pagination from "../../shared-components/Pagination";
import InboxRequest from "./InboxRequest";
import OutboxRequest from "./OutboxRequest";
import { APPLICANT_REQUESTS } from "../../configuration/TemporaryConsts";
import PageName from "../../shared-components/PageName";
import { TabsNav, TabPanel } from "../../shared-components/StyledTabs";
import { PopUp } from "../../shared-components";
import PopUpAllowOne from "./PopUpAllowOne";
// import PopUpAllowAll from "./PopUpAllowAll";
import PopUpDecline from "./PopUpDecline";
import { connect } from "react-redux";
import PageLoading from "../../shared-components/PageLoading";

const limit = 10;

const ApplicantRequest = ({ address, avatar, name }) => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderResults, setRenderResults] = useState([]);
  const [confirmPopUp, setConfirmPopUp] = useState([]);
  const [declinePopUp, setDeclinePopUp] = useState([]);

  useEffect(() => {
    if (value === 0) {
      setPage(1);
      setIsLoading(true);
      setTimeout(() => {
        setRenderResults(
          APPLICANT_REQUESTS.map(({ status, company, skills, time }) => (
            <InboxRequest
              key={company}
              status={status}
              company={company}
              skills={skills}
              time={time}
              allowSend={openConfirmPopUp}
              declineSend={openDeclinePopUp}
            />
          ))
        );
        setIsLoading(false);
        console.log("getActiveResponse");
      }, 300);
    }
    if (value === 1) {
      setPage(1);
      setIsLoading(true);
      setTimeout(() => {
        setRenderResults(
          APPLICANT_REQUESTS.map(({ status, company, skills, time }) => (
            <OutboxRequest
              key={company}
              status={status}
              company={company}
              skills={skills}
              time={time}
            />
          ))
        );
        setIsLoading(false);
        console.log("getAllResponse");
      }, 300);
    }
  }, [value, page]);

  const openConfirmPopUp = () => setConfirmPopUp([{}]);
  const openDeclinePopUp = () => setDeclinePopUp([{}]);
  const closeConfirmPopUp = () => setConfirmPopUp([]);
  const closeDeclinePopUp = () => setDeclinePopUp([]);
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

  return (
    <>
      <Styled.Container>
        <ShortInfo avatar={avatar} name={name} address={address} />
        <PageName pageName={"Requests"} />
        <TabsNav value={value} callback={handleChange} data={tabsData} />
        {isLoading ? (
          <PageLoading />
        ) : (
          <>
            <Styled.Requests>
              <TabPanel value={value} index={0}>
                {renderResults}
                <Styled.BottomBtn>
                  {/*<Styled.AcceptAll onClick={openPopUpAll}>*/}
                  {/*  Accept All*/}
                  {/*</Styled.AcceptAll>*/}
                </Styled.BottomBtn>
              </TabPanel>
              <TabPanel value={value} index={1}>
                {renderResults}
                <Styled.BottomBtn>
                  {/*<Styled.AcceptAll>Accept All</Styled.AcceptAll>*/}
                </Styled.BottomBtn>
              </TabPanel>
            </Styled.Requests>
            {/*<Pagination page={page} count={count} changePage={setPage} />*/}
          </>
        )}
      </Styled.Container>

      <PopUp isShownPopUp={Boolean(confirmPopUp.length)}>
        <PopUpAllowOne cancel={closeConfirmPopUp} data={confirmPopUp} />
      </PopUp>
      <PopUp isShownPopUp={Boolean(declinePopUp.length)}>
        <PopUpDecline cancel={closeDeclinePopUp} data={declinePopUp} />
      </PopUp>
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
