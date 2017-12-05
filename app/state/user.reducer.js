import { Map } from 'immutable';
import { CLICKED } from '../login/login.action';

const initialState = Map({
  isClicked: 'asdfa',
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case CLICKED:
      return state.set('isClicked', 'kjhgkjhg');
    default:
      return state;
  }
};

export default user;
