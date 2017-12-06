import { combineReducers } from 'redux-immutable';
import user from '../reducers/user.reducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
