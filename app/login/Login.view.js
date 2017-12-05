import React, { PureComponent } from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import Button from '../components/Button';

class Login extends PureComponent {
  render() {
    return (
      <div>
        <label htmlFor="test">{this.props.isClicked}</label>
        <Button
          type="button"
          text="Hello!"
          onClick={this.props.clicked}
        />
      </div>
    );
  }
}

Login.propTypes = {
  clicked: PropTypes.func,
  isClicked: PropTypes.string,
};

Login.defaultProps = {
  clicked: noop,
  isClicked: '',
};

export default Login;
