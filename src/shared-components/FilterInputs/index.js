import React, { memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Colors } from "../../configuration/Colors";

const Input = withStyles({
  root: {
    height: 32,
    "& .MuiOutlinedInput-root": {
      height: 32,
      padding: "8px 12px",
      overflow: "hidden",
      backgroundColor: `${Colors.inputs}`,
      "& fieldset": {
        border: `1px solid ${Colors.main_disabled}`,
      },
      "&.Mui-focused fieldset": {
        borderColor: `${Colors.main_header}`,
        borderWidth: 0.5,
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: 0,
      marginLeft: 7,
      textAlign: "left",
      fontSize: 12,
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
  },
})(TextField);

export const TextInput = memo(
  ({
    width,
    error,
    blured,
    ...otherProps
  }) => {
    return (
      <Input
        {...otherProps}
        error={error}
        onBlur={blured}
        style={
          error ? { width: `${width}`, color: "red" } : { width: `${width}` }
        }
        variant="outlined"
      />
    );
  }
);
