import React, { Suspense } from 'react';
import { ROUTES } from '../configuration/Routes';
import { Switch, Route } from 'react-router-dom';
import Loading from '../shared-components/Loading';

export default () => (
    <Switch>
      <Suspense fallback={ <Loading /> }>
        { ROUTES.map( ({ path, component }) => (
          <Route 
            path={ path }
            component={ component }
            exact
            key={ path }
          />
          )) 
        }
      </Suspense>
    </Switch>
)