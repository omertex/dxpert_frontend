import React, { Suspense } from "react";
import { ROUTES } from "../configuration/Routes";
import { Switch } from "react-router-dom";
import Loading from "../shared-components/Loading";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";


const Routing = ({ isAuth }) => (
  <Switch>
    <Suspense fallback={<Loading />}>
      {ROUTES.map(({ path, component, needAuth }) => (
        <PrivateRoute 
          exact
          path={path} 
          component={component} 
          needAuth={needAuth} 
          isAuth={isAuth}
          key={path} 
        />
      ))}
    </Suspense>
  </Switch>
);

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps)(Routing);
