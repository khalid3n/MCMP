import merge from 'lodash/merge';
import noop from 'lodash/noop';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      hover: false,
    };
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  getEnhancedStyles() {
    let defaultStyles = Button.defaultStyles;
    if (this.state.hover && !this.props.disabled) {
      defaultStyles.backgroundColor = '#0a7ed2';
      defaultStyles = merge({}, defaultStyles, this.props.hoverStyles);
    }
    return merge({}, defaultStyles, this.props.styles);
  }

  render() {
    return (
      <button
        style={this.getEnhancedStyles()}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        type={this.props.type}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.shape({}),
  type: PropTypes.string,
  onClick: PropTypes.func,
  hoverStyles: PropTypes.shape({}),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: noop,
  disabled: false,
  styles: {},
  type: 'button',
  hoverStyles: {},
};

Button.defaultStyles = {
  boxSizing: 'border-box',
  minHeight: 30,
  padding: '0 15px',
  cursor: 'pointer',
  borderRadius: 3,
  fontSize: 14,
  textTransform: 'uppercase',
  userSelect: 'none',
  minWidth: 100,
  margin: 0,
  marginLeft: 5,
  backgroundColor: '#0c8dea',
  border: '#0a7ed2 1px solid',
  color: '#fff',
};

export default Button;
