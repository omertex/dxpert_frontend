import React, { memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Colors } from "../../configuration/Colors";

const Input = withStyles({
  root: {
    height: 32,
    "& .MuiInputBase-root": {
      border: "none",
      "& > fieldset.MuiIOutlinedInput-notchedOutline": {
        border: "none"
      },
    },
    
    "& .MuiOutlinedInput-root": {
      height: 32,
      padding: "5px 20px",
      overflow: "hidden",
      border: `1px solid ${Colors.main_disabled}`,
      "&.Mui-focused": {
        borderColor: `${Colors.main_header}`
      }
    },
    "& .MuiOutlinedInput-input": {
      padding: 0,
      textAlign: "left",
      overflow: "hidden",
      whiteSpace: "nowrap",
      "&.Mui-focused": {
        borderColor: `${Colors.main_header}`
      }
    }
  }
})(TextField);

export const TextInput = memo(
  ({ placeholder, width, value, error, changed, blured }) => {

    return (
      <Input
        value={value}
        error={error}
        onChange={changed}
        onBlur={blured}
        style={
          error ? { width: `${width}`, color: "red" } : { width: `${width}` }
        }
        placeholder={ placeholder }
        variant="outlined"
      />
    );
  }
);