import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children, ...props }) => {
  return (
    <Route {...props}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
