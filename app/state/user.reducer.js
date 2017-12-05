import { CLICKED } from '../login/login.action';

const defaultState = {
  isClicked: false,
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case CLICKED:
      return state.set('isClicked', true);
    default:
      return state;
  }
};

export default user;
