import React, { PureComponent } from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Header from '../components/Header';
import Label from '../components/Label';

class Login extends PureComponent {
  render() {
    const styles = Login.styles;
    return (
      <div>
        <Header text="Welcome!!" />
        <div style={styles.btnStyle}>
          <Button
            type="button"
            text="Go to next page"
            onClick={this.props.clicked}
          />
        </div>
        <Label text={this.props.isClicked} />
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

Login.styles = {
  btnStyle: {
    textAlign: 'center',
  },
};

export default Login;
