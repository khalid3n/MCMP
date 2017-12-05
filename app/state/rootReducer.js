import { combineReducers } from 'redux-immutable';
import login from './loginfilterReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
