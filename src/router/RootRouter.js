import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../modules/login/pages/Login';
import HomePage from '../modules/home/pages/HomePage';

import RequireAuth from './RequireAuth';
import RouteTypes from './RouteTypes';

const RootRouter = () => (
  <Switch>
    <Route
      exact
      path={`/${RouteTypes.dashboard}`}
      component={RequireAuth(HomePage)}
    />
    {/* <Route exact path={RouteTypes.login} component={AuthLogin} /> */}
    {/* <Route path="/auth/callback" component={AuthCallback} /> */}
    {/* <PrivateRoute path="/" component={MainPage} /> */}
    <Route path={`/${RouteTypes.login}`} component={Login} />
    {/* <Route path="/signup" component={Signup} /> */}
    <Route path="/not-found" render={() => <h1> Page Not Found </h1>} />
  </Switch>
);

export default RootRouter;
