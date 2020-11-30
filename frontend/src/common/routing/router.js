import { any, arrayOf } from 'prop-types';
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = ({ routes }) => (
  <BrowserRouter>
    <Switch>
      {routes.map(({
        exact = true, path, component, id, requireAuthentication,
      }) => (
        // Si la route requière une authentification
        requireAuthentication ? (
        // Ici il faudra checker si on est connecté avant de rediriger,
        // sinon utiliser <Redirect /> de react-router
          <Route key={id} path={path} id={id} exact={exact} component={component} />
        ) : (
          // Sinon, si on a pas besoin d'etre authentifier on redirige sur la route
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
