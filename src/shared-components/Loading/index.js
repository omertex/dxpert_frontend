import React from 'react';
import styled from 'styled-components';
import { LinearProgress } from '@material-ui/core';
import { Colors } from '../../configuration/Colors';

const Loading = styled(LinearProgress)`
  color: ${Colors.main_header};
  margin-top: 30px;
`;

export default () => <Loading />