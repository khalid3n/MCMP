import { combineReducers } from 'redux-immutable';
import user from './user.reducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
