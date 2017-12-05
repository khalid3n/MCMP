import React, { PureComponent } from 'react';
import Button from '../components/Button';

class Login extends PureComponent {
  render() {
    // const defaultStyle = this.getDefaultStyles();
    // const style = merge({}, defaultStyle, this.props.style);
    // const styles = this.getEnhancedStyles(style);

    return (
      <Button
        type="button"
        text="Hello!"
      />
    );
  }
}

export default Login;
