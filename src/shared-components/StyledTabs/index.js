import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Colors } from "../../configuration/Colors";
import { withStyles } from "@material-ui/core/styles";

const StyledTab = withStyles({
  root: {
    padding: "0 0 7px 0",
    minWidth: 80,
    minHeight: 25,
    color: `${Colors.text_black}`,
    font: "16px Open Sans, sans-serif",
    textTransform: "none",
    borderBottom: "1px solid #E2E2E2"
  }
})(Tab);

const StyledTabs = withStyles({
  root: {
    marginLeft: 65,
    minHeight: 30,
    marginBottom: 8,
    "& .MuiTabs-indicator": {
      height: 1,
      backgroundColor: "black"
    }
  }
})(Tabs);

export const TabPanel = props => {
  const { children, value, index, ...other } = props;
  return (
    <Box component="div" role="tabpanel" hidden={value !== index} {...other}>
      {children}
    </Box>
  );
};

export const TabsNav = ({ value, data, callback }) => {
  return (
    <StyledTabs value={value} onChange={callback}>
      {data.map(item => (
        <StyledTab label={item.label} index={item.index} key={item.index} />
      ))}
    </StyledTabs>
  );
};
