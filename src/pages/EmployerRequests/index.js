import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import Pagination from "../../shared-components/Pagination";
import Request from "./Request";
import PageName from "../../shared-components/PageName";
import { connect } from "react-redux";
import PageLoading from "../../shared-components/PageLoading";
import { getResumesRequests } from "../../store/sagas/requests";

const limit = 10;

const EmployerRequests = ({ address, photo, organisation }) => {
  const [page, setPage] = useState(0);
  const [resultsCount, setResultsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [renderResults, setRenderResults] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getResumesRequests({
      address: address,
      box: "out",
      role: 0,
      limit: limit,
      offset: page * limit,
    }).then((response) => {
      setResultsCount(Math.floor(response.count / limit));
      setRenderResults(
        response.required_resumes.map((result) => {
          const data = JSON.parse(result.data || "{}");
          return (
            <Request
              key={result.address || ""}
              status={result.status || 0}
              walletID={result.address || ""}
              time={result.date || ""}
              skills={data.public_data ? data.public_data.skills : ""}
              data={data}
              disabled={result.status !== 1}
            />
          );
        })
      );
      setIsLoading(false);
    });
  }, [page]);

  return (
    <Styled.Container>
      <ShortInfo avatar={photo} name={organisation} address={address} />
      <PageName pageName={"My requests"} />
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          <Styled.Requests>{renderResults}</Styled.Requests>
          <Pagination page={page} count={resultsCount} changePage={setPage} />
        </>
      )}
    </Styled.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
    photo: state.employer.profile.photo,
    organisation: state.employer.profile.organisation,
  };
};

export default connect(mapStateToProps)(EmployerRequests);
