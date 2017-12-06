import { connect } from 'react-redux';
import { clicked } from './main.action';

import Main from './Main.view';

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
)(Main);
