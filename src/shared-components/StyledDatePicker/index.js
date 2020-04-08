import React, { memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Colors } from "../../configuration/Colors";
import {
  convertISODateToShort,
  convertShortDateToISO,
} from "../../services/dateTime";

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

export const DatePicker = memo(
  ({ placeholder, width, value, error, changed, blured, ...otherProps }) => {
    // format date value from ISO string to yyyy-mm-dd
    const formattedValue = convertISODateToShort(value);
    // format date value from yyyy-mm-dd to ISO string w/o milliseconds
    const onChangeWrapper = ({ target }) => {
      const isoString = convertShortDateToISO(target.value);
      changed({ target: { name: target.name, value: isoString } });
    };

    return (
      <Input
        value={formattedValue}
        error={error}
        type="date"
        onChange={onChangeWrapper}
        onBlur={blured}
        style={
          error ? { width: `${width}`, color: "red" } : { width: `${width}` }
        }
        placeholder={placeholder}
        variant="outlined"
        {...otherProps}
      />
    );
  }
);
