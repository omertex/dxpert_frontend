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
import SearchIcon from "@material-ui/icons/Search";

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

const SearchInput = withStyles({
  root: {
    height: 30,
    "& .MuiOutlinedInput-root": {
      height: 30,
      overflow: "hidden",
      backgroundColor: `${Colors.bg_white}`,
      padding: "0 32px 0 20px",
      "& fieldset": {
        border: "none"
      }
    },
    "& .MuiOutlinedInput-input": {
      textAlign: "left",
      overflow: "hidden",
      whiteSpace: "nowrap",
      font: "12px Open Sans, sans-serif",
      lineHeight: 16,
      color: `${Colors.text_black}`
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
          {label}
        </InputLabel>
        <OutlinedInput
          value={value}
          error={error}
          onChange={changed}
          onBlur={blured}
          helperText={label}
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

export const Confirm = memo(({ label, value, error, changed, blured }) => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  return (
    <FormControl className={classes.input} variant="outlined">
      <InputLabel htmlFor="confirm" style={error && { color: "red" }}>
        {label}
      </InputLabel>
      <OutlinedInput
        value={value}
        error={error}
        onChange={changed}
        onBlur={blured}
        helperText={label}
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
});

export const QuickSearch = memo(
  ({
    id,
    label,
    value,
    error,
    onChange,
    onKeyPress,
    blured,
    message,
    name
  }) => {
    const classes = useStyles();

    return (
      <FormControl className={classes.input} variant="outlined">
        <SearchInput
          variant="outlined"
          value={value}
          error={error}
          label={label}
          onChange={onChange}
          onBlur={blured}
          helperText={message}
          onKeyPress={onKeyPress}
          name={name}
          placeholder="Enter skills separated by commas"
          id="quick-search"
          type={"search"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color={"disabled"} edge="end" />
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    );
  }
);
