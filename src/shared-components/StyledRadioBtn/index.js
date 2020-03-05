import React from "react";
import Radio from "@material-ui/core/Radio";
import { Colors } from "../../configuration/Colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core/styles";

const StyledRadio = withStyles({
  root: {
    padding: 0,
    marginRight: 8,
    borderWidth: 1,
    color: `${Colors.main_disabled}`,
    "&$checked": {
      color: `${Colors.main_header}`
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const Form = withStyles({
  root: {
    padding: 0,
    margin: "0 38px 0 0"
  },
  label: {
    color: `${Colors.text_black}`,
    font: "12px Open Sans, sans-serif"
  }
})(props => <FormControlLabel {...props} />);

const Group = withStyles({
  root: {
    display: "flex",
    flexDirection: "row"
  }
})(props => <RadioGroup {...props} />);

export const RadioBtn = ({ data }) => (
  <Group defaultValue={data[0].value} name="radios">
    {data.map(item => (
      <Form
        labelPlacement="end"
        control={<StyledRadio value={item.value} />}
        key={item.value}
        label={item.label}
      />
    ))}
  </Group>
);
