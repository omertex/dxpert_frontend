import React, { useEffect } from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import Pagination from "../../shared-components/Pagination";
import Request from "./Request";
import PageName from "../../shared-components/PageName";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions/actionTypes";
// import txByIdResponse from "../../configuration/txById.json"; // INSTEAD OF LOCAL FILE THE getTsxById FUNCTION SHOULD BE USED

const txType = "UploadResume";
const senderAddress = "cosmos1e00jz2rjc398qwpke369222dv47jvnzf68smtv";

const getRequests = responseArray => {
  const requests = responseArray.map(
    ({
      timestamp,
      tx: {
        value: {
          msg: {
            "0": { value: response }
          }
        }
      }
    }, key) => {
      const gotSkills = response.resume.public_data.skills.join(", ");
      const hours = Number(new Date(timestamp).getHours());
      const minutes = String(new Date(timestamp).getMinutes());
      const time =
        String(hours > 12 ? hours - 12 : hours) +
        ":" +
        minutes +
        (hours > 12 ? " PM" : " AM");

      return (
        <Request key={key}
          status="completed"
          walletID={response.address.slice(0, 8)}
          gender={response.resume.public_data.sex}
          age={response.resume.public_data.age}
          skills={gotSkills}
          time={time}
        />
      );
    }
  );

  return requests;
};

const EmployerRequests = ({ getTsxById, reqs }) => {
  useEffect(() => {
    const getTransactions = async () => {
      await getTsxById(txType, senderAddress);
    }
    getTransactions();
  }, [getTsxById]);

  let requests;
  if (reqs.length > 0) {
    requests = getRequests(reqs);
  } else {
    requests = "Downloading requests..."
  }

  return (
    <Styled.Container>
      <ShortInfo />
      <PageName pageName={"My requests"} />
      <Styled.Requests>{requests}</Styled.Requests>
      <Pagination />
    </Styled.Container>
  );
};

const mapStateToProps = state => {
  return {
    reqs: state.req.request
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTsxById: (txType, senderAddress) => dispatch({ type: actionTypes.REQUESTS.GET_TXS, txType, senderAddress })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerRequests);
