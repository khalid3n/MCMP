import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

let configureStore;
if (process.env.NODE_ENV === 'production') {
  configureStore = (predefinedState) => {
    return createStore(
      reducers,
      predefinedState,
    );
  };
} else {
  const logger = createLogger();
  configureStore = (predefinedState) => {
    return createStore(
      reducers,
      predefinedState,
      applyMiddleware(
        logger,
        thunk,
      ),
    );
  };
}

export default configureStore;
