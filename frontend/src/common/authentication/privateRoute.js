import { bool, string, object } from 'prop-types';
import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { getLoginRoute } from 'src/common/routing/routesResolver';
import { isAuthenticated } from './authProvider';

function PrivateRoute({
  component, path, exact, id,
}) {
  //
  return isAuthenticated() ? (
    <Route key={id} id={id} exact={exact} path={path} component={component} />
  ) : (
    <Redirect
      to={getLoginRoute()}
    />
  );
}

PrivateRoute.propTypes = {
  path: string.isRequired,
  exact: bool.isRequired,
  id: string.isRequired,
  component: object.isRequired,

};

export default PrivateRoute;
