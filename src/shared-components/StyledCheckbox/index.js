import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Colors } from "../../configuration/Colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const GreenCheckbox = withStyles({
  root: {
    padding: 0,
    marginRight: 5,
    borderWidth: 0.5,
    color: `${Colors.main_disabled}`,
    "&$checked": {
      color: `${Colors.main_header}`,
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Form = withStyles({
  root: {
    padding: 0,
    margin: "0 38px 0 0",
  },
  label: {
    color: `${Colors.text_black}`,
    font: "12px Open Sans, sans-serif",
  },
})((props) => <FormControlLabel {...props} />);

export default ({ label, ...otherProps }) => (
  <Form
    style={{
      color: `${Colors.main_disabled}`,
      padding: 0,
      margin: 0,
      label: {
        color: `${Colors.text_black}`,
        font: "12px Open Sans, sans-serif",
      },
    }}
    label={label}
    control={<GreenCheckbox {...otherProps} />}
  />
);
