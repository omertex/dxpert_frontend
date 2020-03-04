import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Colors } from '../../configuration/Colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
  root: {
      padding: 0,
      borderWidth: 0.5,
      color: `${Colors.main_disabled}`,
      '&$checked': {
        color: `${Colors.main_header}`,
      }
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default ({ value }) => (
  <FormControlLabel
    style={{ 
      color: `${Colors.main_disabled}`, 
      padding: 0,
      margin: 0
    }}
    control={ <GreenCheckbox value={ value } /> }
  />
)

