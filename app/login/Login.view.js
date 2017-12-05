import React, { PureComponent } from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import Button from '../components/Button';

class Login extends PureComponent {
  render() {
    return (
      <Button
        type="button"
        text="Hello!"
        onClick={this.props.clicked}
      />
    );
  }
}

Login.propTypes = {
  clicked: PropTypes.func,
};

Login.defaultProps = {
  clicked: noop,
};

export default Login;
