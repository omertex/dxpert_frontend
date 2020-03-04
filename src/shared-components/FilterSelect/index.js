import React, { memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Colors } from "../../configuration/Colors";

const Input = withStyles({
  root: {
    height: 32,
    "& .MuiOutlinedInput-root": {
      height: 32,
      backgroundColor: `${Colors.inputs}`,
      font: "12px Open Sans, sans-serif",
      color: `${Colors.text_black}`,
      "&.Mui-focused fieldset": {
        borderColor: `${Colors.main_header}`,
        borderWidth: 0.5
      }
    },
    "& .MuiOutlinedInput-input": {
      padding: "6px 20px",
      textAlign: "left",
      overflow: "hidden",
      whiteSpace: "nowrap"
    }
  }
})(TextField);

export const FilterSelect = memo(
  ({
    data,
    defaultValue,
    label,
    placeholder,
    width,
    value,
    error,
    changed,
    blured
  }) => {
    return (
      <Input
        id="select"
        select
        value={value}
        onChange={changed}
        onBlur={blured}
        style={
          error ? { width: `${width}`, color: "red" } : { width: `${width}` }
        }
        defaultValue={defaultValue || "none"}
        label={label}
        variant="outlined"
      >
        <MenuItem value="none">
          <em>{placeholder || "None"}</em>
        </MenuItem>
        {data.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Input>
    );
  }
);
