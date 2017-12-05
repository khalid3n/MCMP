import { connect } from 'react-redux';
import { clicked } from './login.action';

import Login from './Login.view';

const mapStateToProps = state => ({
  isClicked: state.getIn(['user', 'isClicked']),
});

const mapDispatchToProps = dispatch => ({
  clicked: () => {
    dispatch(clicked());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
