import React from 'react';
import { TextInput } from '../../shared-components/FilterInputs'; 

export default () => (
  <div style={{ display: 'flex', flexFlow: 'column' }}>
    <TextInput label="Company" width="400px"/>
    <TextInput label="Name" width="400px"/>
  </div>
)