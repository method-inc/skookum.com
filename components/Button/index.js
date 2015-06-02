/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
var {PropTypes} = React;

class Button extends React.Component {
  render(): ?ReactElement {
    var {children, color, type, style, ...props} = this.props;
    type = type ? `is-${type}` : '';
    var className = `Button ${type}`;

    var buttonStyle = color ? {...style, color: color, borderColor: color} : style;

    if (this.props.to || this.props.href) {
      return (
        <Link {...props} className={className} style={buttonStyle}>
          {children}
          {type === 'is-more' && <span className="Button-arrow">〉</span>}
        </Link>
      );
    }

    return (
      <button {...props} className={className} style={buttonStyle}>
        {children}
        {type === 'is-more' && <span className="Button-arrow">〉</span>}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'more']),
  children: PropTypes.any.isRequired,
};

export default Button;
