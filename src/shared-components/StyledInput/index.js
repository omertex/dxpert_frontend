import React, { useState, memo } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Colors } from "../../configuration/Colors";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const Input = withStyles({
  root: {
    height: 50,
    "& label.Mui-focused": {},
    "& .MuiOutlinedInput-root": {
      height: 50,
      overflow: "hidden",
      "& fieldset": {
        borderColor: `${Colors.main_disabled}`,
        padding: "17px 14px"
      },
      "&:hover fieldset": {
        borderColor: `${Colors.main_header}`
      },
      "&.Mui-focused fieldset": {
        borderColor: `${Colors.main_header}`,
        borderWidth: 1
      }
    },
    "& .MuiOutlinedInput-input": {
      textAlign: "left",
      overflow: "hidden",
      whiteSpace: "nowrap"
    }
  }
})(TextField);

const Multi = withStyles({
  root: {
    "& label.Mui-focused": {
      color: `${Colors.main_header}`
    },
    "& .MuiOutlinedInput-root": {
      overflow: "hidden",
      "& fieldset": {
        borderColor: `${Colors.main_disabled}`,
        background: `${Colors.bg_main}`,
        padding: "17px 14px"
      },
      "&:hover fieldset": {
        borderColor: `${Colors.main_header}`
      },
      "&.Mui-focused fieldset": {
        borderColor: `${Colors.main_header}`,
        borderWidth: 1
      }
    },
    "& .MuiOutlinedInput-input": {
      textAlign: "left",
      overflow: "hidden",
      whiteSpace: "nowrap"
    }
  }
})(TextField);

const useStyles = makeStyles({
  margin: {
    margin: 5
  },
  input: {
    "& label": {
      background: `${Colors.bg_white}`,
      paddingRight: 5
    },
    "& label.Mui-focused": {
      color: `${Colors.main_header}`,
      background: `${Colors.bg_white}`
    },
    "& .MuiOutlinedInput-root": {
      height: 50,
      "& fieldset": {
        borderColor: `${Colors.main_disabled}`
      },
      "&:hover fieldset": {
        borderColor: `${Colors.main_header}`
      },
      "&.Mui-focused fieldset": {
        borderColor: `${Colors.main_header}`,
        borderWidth: 0.5
      }
    }
  }
});

export default memo(
  ({ label, width, needMargin, value, error, changed, blured, message }) => {
    const classes = useStyles();

    return (
      <Input
        id="email"
        value={value}
        error={error}
        onChange={changed}
        onBlur={blured}
        className={needMargin && classes.margin}
        style={
          error ? { width: `${width}`, color: "red" } : { width: `${width}` }
        }
        label={error ? message : label}
        variant="outlined"
      />
    );
  }
);

export const Multiline = memo(
  ({
    label,
    width,
    needMargin,
    multiline,
    rows,
    value,
    error,
    changed,
    blured
  }) => {
    const classes = useStyles();

    return (
      <Multi
        value={value}
        error={error}
        onChange={changed}
        onBlur={blured}
        className={needMargin && classes.margin}
        style={{ width: `${width}` }}
        label={label}
        variant="outlined"
        multiline={multiline}
        rows={rows}
        id="multiline-input"
      />
    );
  }
);

export const Password = memo(
  ({ id, label, value, error, changed, blured, message }) => {
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();

    return (
      <FormControl className={classes.input} variant="outlined">
        <InputLabel htmlFor="password" style={error ? { color: "red" } : null}>
          {error ? message : label}
        </InputLabel>
        <OutlinedInput
          value={value}
          error={error}
          onChange={changed}
          onBlur={blured}
          helperText={message}
          id="password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
  }
);

export const Confirm = memo(
  ({ id, label, value, error, changed, blured, message }) => {
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();

    return (
      <FormControl className={classes.input} variant="outlined">
        <InputLabel htmlFor="confirm" style={error && { color: "red" }}>
          {error ? message : label}
        </InputLabel>
        <OutlinedInput
          value={value}
          error={error}
          onChange={changed}
          onBlur={blured}
          helperText={message}
          id="confirm"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
  }
);
