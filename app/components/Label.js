import merge from 'lodash/merge';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Label extends PureComponent {
  render() {
    const styles = Label.defaultStyles;
    return (
      <h2 style={merge({}, styles, this.props.styles)}>
        {this.props.text}
      </h2>
    );
  }
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.shape({}),
};

Label.defaultProps = {
  styles: {},
};

Label.defaultStyles = {
  textAlign: 'center',
  userSelect: 'none',
  color: 'Black',
  padding: 5,
};

export default Label;
