import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { browserHistory } from 'react-router';
import DevTools from './DevTools';
import configureStore from './state/configureStore';
import Login from './login/Login.container';

const isDev = process.env.NODE_ENV === 'development';
const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
  <Provider store={store}>
    <div>
      {isDev && <DevTools />}
      <Router>
        <Route path="/" component={Login} />
      </Router>
    </div>
  </Provider>
);

export default Root;

