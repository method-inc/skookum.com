/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Input extends React.Component {

  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {
      hasContent: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: mixed): void {
    this.props.handleChange(event.target);
    this.setState({hasContent: true});
  }

  render(): ?ReactElement {
    var {
      label,
      ...props,
    } = this.props;

    var labelClass = this.state.hasContent ? " has-content" : "";
    var inputClass = this.props.element === "textarea" ? " is-textarea" : ""

    return (
      <fieldset className="Input">
        <label htmlFor={this.props.id || this.props.name} className={"Input-label" + labelClass}>{label}</label>
        <this.props.element onChange={this.handleChange} id={this.props.id || this.props.name} className={"Input-element" + inputClass} placeholder={label} {...props} />
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
