import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

/* views */
import App from './views/App';
import App2 from './views/SecondApp';
import NotFound from './views/NotFound';

export default () => (
  <Router history={browserHistory}>
    <Route exact isExact path='/' component={App}/>
    <Route isExact path='/Api' component={App2}/> 
  </Router>
);
