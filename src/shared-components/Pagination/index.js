import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { Button } from "./styled";
import { withStyles } from "@material-ui/core/styles";

const StyledPagination = withStyles({
  root: {
    width: "100%",
    height: 25,
    marginTop: "auto",
    marginBottom: 45,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    "& .MuiPaginationItem-page": {
      fontSize: 12,
      lineHeight: 1,
      margin: 0,
      padding: 0,
      "&:hover": {
        background: "transparent"
      }
    },
    "& .Mui-selected": {
      background: "transparent",
      fontSize: 16
    }
  }
})(Pagination);

export default ({ page, count, changePage }) => {
  const handleChange = (event, value) => {
    changePage(value);
  };
  const setPaginationItem = item => {
    if (item.type === "previous" || item.type === "next")
      return <Button {...item}>{item.type}</Button>;
    return <PaginationItem {...item} />;
  };

  return (
    <StyledPagination
      page={page}
      count={count}
      onChange={handleChange}
      renderItem={item => setPaginationItem(item)}
    />
  );
};
