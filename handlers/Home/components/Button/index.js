/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
var {PropTypes} = React;

class Button extends React.Component {
  render(): ?ReactElement {
    if (this.props.to || this.props.href) {
      var {children, ...props} = this.props;

      return (
        <Link {...props} className="HomeButton">
          {children}
          <span className="HomeButton-arrow">〉</span>
        </Link>
      );
    }

    return (
      <button {...props} className="HomeButton">
        {children}
        <span className="HomeButton-arrow">〉</span>
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Button;
