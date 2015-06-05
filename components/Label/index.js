/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';

class Label extends Component {
  render(): ReactElement {
    var {
      children,
      type,
      className = '',
      ...props
    } = this.props;

    className = `Label is-${type} ${className}`;

    return (
      <div {...props} className={className}>
        {children}
      </div>
    );
  }
}

Label.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']).isRequired,
  children: PropTypes.any.isRequired,
};

export default Label;
