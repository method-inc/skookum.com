/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
var {PropTypes} = React;

class Button extends React.Component {
  render(): ?ReactElement {
    var {children, type, ...props} = this.props;
    type = type ? `is-${type}` : '';
    var className = `Button ${type}`;

    if (this.props.to || this.props.href) {
      return (
        <Link {...props} className={className}>
          {children}
          {type === 'is-more' && <span className="Button-arrow">〉</span>}
        </Link>
      );
    }

    return (
      <button {...props} className={className}>
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
