import React from 'react';

import { render } from 'react-dom';

//Import css
import css from './styles/style.css';

//Import Componnets
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';

// Initiate raven erorr checking
import Raven from 'raven-js';
import { sentry_url } from './config/config';

Raven.config(sentry_url).install();

// props are passed down into the children of App, PhotoGrid and single,
// by React.cloneElement specified in components/Main,
// which is linked in the main componnent App
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
