import { connect } from 'react-redux';
import { clicked } from './register.action';

import Register from './Register.view';

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
)(Register);
