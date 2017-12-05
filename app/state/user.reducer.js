import { Map } from 'immutable';
import { CLICKED } from '../login/login.action';

const initialState = Map({
  isClicked: 'not clicked',
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case CLICKED:
      return state.set('isClicked', 'clicked now');
    default:
      return state;
  }
};

export default user;
