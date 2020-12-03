import { any, arrayOf } from 'prop-types';
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'src/common/authentication/privateRoute';

const Router = ({ routes }) => (
  <BrowserRouter>
    <Switch>
      {routes.map(({
        exact = true, path, component, id, requireAuthentication,
      }) => (
        // If needed user authentication for access to this Route, redirect to PrivateRoute
        requireAuthentication ? (
          <PrivateRoute key={id} path={path} id={id} exact={exact} component={component} />
        ) : (
          // Else, redirect to the choosen Route
          <Route key={id} exact={exact} path={path} component={component} />
        )))}
    </Switch>
  </BrowserRouter>
);

Router.propTypes = {
  routes: arrayOf(any),
};

Router.defaultProps = {
  routes: [],
};

export default Router;
