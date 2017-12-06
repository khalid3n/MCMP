import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Label from '../../components/Label';

class Main extends PureComponent {
  render() {
    const styles = Main.styles;
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
        <Link to="/nextpage">hello</Link>
        <Label text={this.props.isClicked} />
      </div>
    );
  }
}

Main.propTypes = {
  clicked: PropTypes.func,
  isClicked: PropTypes.string,
};

Main.defaultProps = {
  clicked: noop,
  isClicked: '',
};

Main.styles = {
  btnStyle: {
    textAlign: 'center',
  },
};

export default Main;
