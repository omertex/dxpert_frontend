import React, { memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Colors } from "../../configuration/Colors";
import { makeStyles } from "@material-ui/core/styles";

const Input = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: `${Colors.inputs}`,
      font: "12px Open Sans, sans-serif",
      color: `${Colors.text_black}`,
      "&.Mui-focused fieldset": {
        borderColor: `${Colors.main_header}`,
        borderWidth: 0.5
      }
    },
    "& .MuiOutlinedInput-input": {
      padding: "7px 20px 8px 20px",
      textAlign: "left",
      overflow: "hidden",
      whiteSpace: "nowrap",
      "& span": {
        color: "#b2b2b2"
      }
    }
  }
})(TextField);

const Item = withStyles({
  root: {
    height: 28,
    font: "12px Open Sans, sans-serif",
    color: `${Colors.text_black}`,
    "& span": {
      color: "#b2b2b2"
    }
  }
})(MenuItem);

const useStyles = makeStyles({
  paper: {
    padding: 0,
    background: `${Colors.main_bg}`,
    boxShadow:
      "0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)",
    borderRadius: 2
  }
});

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
    const classes = useStyles();

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
        SelectProps={{
          MenuProps: {
            classes: {
              paper: classes.paper
            }
          }
        }}
        defaultValue={defaultValue || "none"}
        label={label}
        variant="outlined"
      >
        <Item value="none">
          <span>{placeholder || "None"}</span>
        </Item>
        {(data || []).map(item => (
          <Item key={item.id} value={item.value}>
            {item.title}
          </Item>
        ))}
      </Input>
    );
  }
);
