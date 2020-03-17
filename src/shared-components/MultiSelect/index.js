import React, { memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { Colors } from "../../configuration/Colors";
import { makeStyles } from "@material-ui/core/styles";

const Input = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      padding: "1px 3px",
      backgroundColor: `${Colors.inputs}`,
      "&.Mui-focused fieldset": {
        borderColor: `${Colors.main_header}`,
        borderWidth: 0.5
      }
    },
    "& .MuiOutlinedInput-input": {
      padding: "0",
      textAlign: "left"
    }
  }
})(TextField);

const useStyles = makeStyles({
  tag: {
    height: "24px",
    borderRadius: "4px",
    backgroundColor: `${Colors.tag}`,
    font: "10px Open Sans, sans-serif",
    lineHeight: "14px",
    color: `${Colors.text_black}`
  },
  input: {
    marginLeft: "10px",
    font: "12px Open Sans, sans-serif",
    lineHeight: "14px"
  },
  option: {
    height: 28,
    font: "12px Open Sans, sans-serif",
    color: `${Colors.text_black}`
  },
  paper: {
    padding: 0,
    background: `${Colors.main_bg}`,
    boxShadow:
      "0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)",
    borderRadius: 2
  }
});

export const MultiSelect = memo(
  ({
    data,
    placeholder,
    width,
    value,
    error,
    onChange,
    blured,
    name,
    disabled
  }) => {
    const classes = useStyles();

    return (
      <Autocomplete
        multiple
        style={{
          width: `${width}`
        }}
        options={data || []}
        classes={{
          tag: classes.tag,
          input: classes.input,
          option: classes.option,
          paper: classes.paper
        }}
        // onChange={(e, value) => onChange(name, value)}
        onChange={onChange}
        getOptionLabel={option => option.label}
        value={value}
        disabled={disabled}
        filterSelectedOptions
        renderInput={params => (
          <Input
            {...params}
            error={error}
            onBlur={blured}
            width={width}
            style={
              error
                ? { width: `${width}`, color: "red" }
                : { width: `${width}` }
            }
            placeholder={placeholder}
            variant="outlined"
          />
        )}
      />
    );
  }
);
