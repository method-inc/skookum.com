/** @flow */
require('./styles.css');

import React, {Component, PropTypes} from 'react';

const COLORS = {
  yellow: '#FFDD2E',
};

class ServiceSection extends Component {
  render(): ReactElement {
    var {
      className = '',
      color,
      children,
      style = {},
      ...props,
    } = this.props;

    className = `ServiceSection ${className}`;

    if (color) {
      style = Object.assign({backgroundColor: COLORS[color]}, style);
    }

    return (
      <section {...props} style={style} className={className}>
        {children}
      </section>
    );
  }
}

ServiceSection.propTypes = {
  // TODO: share these constants
  color: PropTypes.oneOf(['black', 'red', 'orange', 'yellow']),
  children: PropTypes.any.isRequired,
};

export default ServiceSection;
