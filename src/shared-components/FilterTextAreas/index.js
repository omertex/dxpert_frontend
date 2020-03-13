import React, { memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Colors } from "../../configuration/Colors";

const Area = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      padding: "8px 12px",
      backgroundColor: `${Colors.inputs}`,
      font: "12px Open Sans, sans-serif",
      color: `${Colors.text_black}`,
      "&.Mui-focused fieldset": {
        borderColor: `${Colors.main_header}`,
        borderWidth: 0.5
      }
    },
    "& .MuiOutlinedInput-input": {
      padding: "0",
      textAlign: "left",
      fontSize: 12
    }
  }
})(TextField);

export const TextArea = memo(
  ({ placeholder, width, value, error, changed, blured, rows, name }) => {
    return (
      <Area
        multiline
        value={value}
        error={error}
        name={name}
        onChange={changed}
        onBlur={blured}
        style={
          error ? { width: `${width}`, color: "red" } : { width: `${width}` }
        }
        rows={rows || 6}
        placeholder={placeholder}
        variant="outlined"
      />
    );
  }
);
