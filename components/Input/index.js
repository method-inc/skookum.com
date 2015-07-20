/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Input extends React.Component {
  render(): ?ReactElement {
    var {
      label,
      ...props,
    } = this.props;

    return (
      <fieldset className="Input">
        <label htmlFor={this.props.name} className="Input-label">{label}</label>
        <this.props.element id={this.props.name} className="Input-element" {...props} />
      </fieldset>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  element: PropTypes.oneOf(['input', 'textarea']),
};

Input.defaultProps = {
  element: 'input',
};

export default Input;
