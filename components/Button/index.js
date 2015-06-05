/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
var {PropTypes} = React;

class Button extends React.Component {
  render(): ReactElement {
    var {children, className, color, style, type, ...props} = this.props;
    var buttonStyle = color ? {...style, color: color, borderColor: color} : style;

    type = type ? `is-${type}` : '';
    className = `Button ${type} ${className || ''}`;
    children = type === 'is-more' ? [children, <span key="arrow" className="Button-arrow">〉</span>] : children;

    if (this.props.to) {
      return (
        <Link {...props} className={className} style={buttonStyle}>{children}</Link>
      );
    }

    if (this.props.href) {
      return (
        <a {...props} className={className} style={buttonStyle}>{children}</a>
      );
    }

    return (
      <button {...props} className={className} style={buttonStyle}>{children}</button>
    );
  }
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'more', 'light']),
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  type: 'secondary',
};

export default Button;
