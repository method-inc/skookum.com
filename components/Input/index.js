/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Input extends React.Component {

  render(): ?ReactElement {
    var {
      label,
      value,
      labelStyle,
      inputStyle,
      ...props,
    } = this.props;

    var labelClass = value ? ' is-visible' : '';
    var inputClass = this.props.element === 'textarea' ? ' is-textarea' : '';

    return (
      <fieldset className="Input">
        <label style={labelStyle} htmlFor={this.props.id || this.props.name} className={'Input-label' + labelClass}>{label}</label>
        <this.props.element style={inputStyle} onChange={this.props.onChange} id={this.props.id || this.props.name} className={'Input-element' + inputClass} placeholder={label} {...props} />
      </fieldset>
    );
  }
}

Input.propTypes = {
  element: PropTypes.oneOf(['input', 'textarea']),
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  element: 'input',
};

export default Input;
