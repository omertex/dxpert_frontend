import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuth, needAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        needAuth && !isAuth ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default PrivateRoute;
