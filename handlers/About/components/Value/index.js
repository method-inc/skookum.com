/** @flow */

require('./styles.css');

import React from 'react';
import lookup from 'lookup';

var {PropTypes} = React;

class Value extends React.Component {

  render(): ?ReactElement {
    var value = this.props.value;
    return (
      <li className="Value">
        <img className="Value-image" src={lookup(value, 'image.fields.file.url')} />
        <h3 className="Value-title">{value.title}</h3>
        <p className="Value-text">{value.description}</p>
      </li>
    );
  }
}

Value.propTypes = {

};

export default Value;
