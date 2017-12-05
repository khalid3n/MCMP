import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './rootReducer';

const rootReducers = combineReducers({
  reducers,
  routing: routerReducer,
});

// STORE
let configureStore;
if (process.env.NODE_ENV === 'production') {
  configureStore = (predefinedState) => {
    return createStore(
      rootReducers,
      predefinedState,
      applyMiddleware(thunk),
    );
  };
} else {
  const logger = createLogger();
  configureStore = (predefinedState) => {
    return createStore(
      rootReducers,
      predefinedState,
      applyMiddleware(
        thunk,
        logger,
      ),
    );
  };
}

export default configureStore;