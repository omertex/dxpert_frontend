import React from 'react';
import * as Styled from './styled';
import ShortInfo from '../../shared-components/ShortInfo';
import Pagination from '../../shared-components/Pagination';
import Request from './Request';
import { EMPLOYER_REQUESTS } from '../../configuration/TemporaryConsts';
import PageName from '../../shared-components/PageName';

const requests = EMPLOYER_REQUESTS.map(({ status, walletID, gender, age, skills, time }) => (
  <Request 
    status={ status }
    walletID={ walletID }
    gender={ gender }
    age={ age }
    skills={ skills }
    time={ time }
  />
))

export default () => (
  <Styled.Container>
    <ShortInfo />
    <PageName pageName={"My requests"}/>
    <Styled.Requests>
      { requests }
    </Styled.Requests>
    <Pagination />
  </Styled.Container>
)