import React, { PureComponent } from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Label from '../../components/Label';

class Register extends PureComponent {
  render() {
    const styles = Register.styles;
    return (
      <div>
        <Header text="Register!!" />
        <div style={styles.btnStyle}>
          <Button
            type="button"
            text="Go to previous page"
            onClick={this.props.clicked}
          />
        </div>
        <Label text={this.props.isClicked} />
      </div>
    );
  }
}

Register.propTypes = {
  clicked: PropTypes.func,
  isClicked: PropTypes.string,
};

Register.defaultProps = {
  clicked: noop,
  isClicked: '',
};

Register.styles = {
  btnStyle: {
    textAlign: 'center',
  },
};

export default Register;
