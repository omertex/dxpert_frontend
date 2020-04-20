import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import Pagination from "../../shared-components/Pagination";
import InboxRequest from "./InboxRequest";
import OutboxRequest from "./OutboxRequest";
import PageName from "../../shared-components/PageName";
import { TabsNav, TabPanel } from "../../shared-components/StyledTabs";
import { PopUp } from "../../shared-components";
import PopUpAllowOne from "./PopUpAllowOne";
// import PopUpAllowAll from "./PopUpAllowAll";
import PopUpDecline from "./PopUpDecline";
import { connect } from "react-redux";
import PageLoading from "../../shared-components/PageLoading";
import { getResumesRequests } from "../../store/sagas/requests";

const limit = 10;

const ApplicantRequest = ({ address, avatar, name }) => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [resultsCount, setResultsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [renderResults, setRenderResults] = useState([]);
  const [confirmPopUp, setConfirmPopUp] = useState([]);
  const [declinePopUp, setDeclinePopUp] = useState([]);

  useEffect(() => {
    if (value === 0) {
      setIsLoading(true);
      getResumesRequests({
        address: address,
        box: "in",
        role: 1,
        limit: limit,
        offset: page * limit,
      }).then((response) => {
        setResultsCount(Math.floor(response.count / limit));
        setRenderResults(
          response.required_resumes.map((result) => {
            const public_data = JSON.parse(result.data || "{}");
            return (
              <InboxRequest
                key={result.address || ""}
                status={result.status || 0}
                company={public_data.organisation || ""}
                time={result.date || ""}
                allowSend={() =>
                  openConfirmPopUp(result.address, public_data.pub_key)
                }
                declineSend={() =>
                  openDeclinePopUp(result.address, public_data.pub_key)
                }
              />
            );
          })
        );
        setIsLoading(false);
      });
    }
    if (value === 1) {
      setIsLoading(true);
      getResumesRequests({
        address: address,
        box: "out",
        role: 1,
        limit: limit,
        offset: page * limit,
      }).then((response) => {
        setRenderResults(
          response.required_resumes.map((result) => {
            const public_data = JSON.parse(result.data || "{}");
            return (
              <OutboxRequest
                key={result.address || ""}
                status={result.status || 0}
                company={public_data.organisation || ""}
                time={result.date || ""}
              />
            );
          })
        );
        setIsLoading(false);
      });
    }
  }, [value, page]);

  const openConfirmPopUp = (address, publicKey) =>
    setConfirmPopUp([{ address, publicKey }]);
  const openDeclinePopUp = (address, publicKey) =>
    setDeclinePopUp([{ address, publicKey }]);
  const closeConfirmPopUp = () => setConfirmPopUp([]);
  const closeDeclinePopUp = () => setDeclinePopUp([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(0);
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
            <Pagination page={page} count={resultsCount} changePage={setPage} />
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
