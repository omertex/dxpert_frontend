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
        color: `${Colors.continue_btn}`,
      }
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default () => (
  <FormControlLabel
    style={{ 
      color: `${Colors.main_disabled}`, 
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 0,
      margin: 0
    }}
    control={ <GreenCheckbox value="checked" /> }
  />
)

