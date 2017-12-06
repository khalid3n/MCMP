import React from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import configureStore from './state/configureStore';
import routes from './routes';

const isDev = process.env.NODE_ENV === 'development';
const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
  <Provider store={store}>
    <div>
      {isDev && <DevTools />}
      {routes}
    </div>
  </Provider>
);

export default Root;

