import React, { memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Colors } from "../../configuration/Colors";

const Area = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      padding: "10px 20px",
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

export const TextArea = memo(
  ({ placeholder, width, value, error, changed, blured, rows }) => {
    return (
      <Area
        multiline
        value={value}
        error={error}
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
