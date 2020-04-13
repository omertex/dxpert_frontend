import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import Pagination from "../../shared-components/Pagination";
import Request from "./Request";
import PageName from "../../shared-components/PageName";
import { connect } from "react-redux";
import PageLoading from "../../shared-components/PageLoading";
import { TabPanel, TabsNav } from "../../shared-components/StyledTabs";
import { EMPLOYER_REQUESTS } from "../../configuration/TemporaryConsts";

const limit = 10;

const EmployerRequests = ({ address }) => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderResults, setRenderResults] = useState([]);

  useEffect(() => {
    if (value === 0) {
      setPage(1);
      setIsLoading(true);
      setTimeout(() => {
        setRenderResults(
          EMPLOYER_REQUESTS.filter(
            (x) => x.status !== "pending"
          ).map(({ status, walletID, gender, age, skills, time }) => (
            <Request
              status={status}
              walletID={walletID}
              gender={gender}
              age={age}
              skills={skills}
              time={time}
              disabled={status === "failed"}
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
          EMPLOYER_REQUESTS.map(
            ({ walletID, gender, age, skills, time }) => (
              <Request
                status={"pending"}
                walletID={walletID}
                gender={gender}
                age={age}
                skills={skills}
                time={time}
                disabled={true}
              />
            )
          )
        );
        setIsLoading(false);
        console.log("getAllResponse");
      }, 300);
    }
  }, [value, page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsData = [
    {
      label: "Active",
      index: 0,
    },
    {
      label: "History",
      index: 1,
    },
  ];

  return (
    <Styled.Container>
      <ShortInfo address={address} />
      <PageName pageName={"My requests"} />
      <TabsNav value={value} callback={handleChange} data={tabsData} />
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          <Styled.Requests>
            <TabPanel value={value} index={0}>
              {renderResults}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {renderResults}
            </TabPanel>
          </Styled.Requests>
          {/*<Pagination page={page} count={count} changePage={setPage} />*/}
        </>
      )}
    </Styled.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
  };
};

export default connect(mapStateToProps)(EmployerRequests);
