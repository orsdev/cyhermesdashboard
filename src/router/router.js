import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home'));

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default Router;
