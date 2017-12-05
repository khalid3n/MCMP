import merge from 'lodash/merge';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Header extends PureComponent {
  render() {
    const styles = Header.defaultStyles;
    return (
      <h2 style={merge({}, styles, this.props.styles)}>
        {this.props.text}
      </h2>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.shape({}),
};

Header.defaultProps = {
  styles: {},
};

Header.defaultStyles = {
  textAlign: 'center',
  userSelect: 'none',
  color: '#0c8dea',
  width: '100%',
  textTransform: 'upperCase',
};

export default Header;
