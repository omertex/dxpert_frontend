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
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderResults, setRenderResults] = useState([]);

  useEffect(() => {
    setPage(1);
    setIsLoading(true);
    getResumesRequests({
      src: address,
    }).then((response) => {
      setRenderResults(
        response.map((result) => {
          return (
            <Request
              key={result.dest || ""}
              status={result.status || 0}
              walletID={result.dest || ""}
              gender={result.data ? result.data.sex : ""}
              age={result.data ? result.data.birth_date : ""}
              skills={result.data ? result.data.public_data.skills : []}
              time={result.updated_at || ""}
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
          {/*<Pagination page={page} count={count} changePage={setPage} />*/}
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
