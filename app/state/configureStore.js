import { createStore } from 'redux';
import reducers from './rootReducer';

const configureStore = (initialState) => {
  return createStore(
    reducers,
    initialState,
  );
};

export default configureStore;
