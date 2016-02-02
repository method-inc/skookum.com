/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Headline extends React.Component {
  render(): ?ReactElement {
    return (
      <h2 className="Headline" style={this.props.style}>
        {this.props.text}
      </h2>
    );
  }
}

Headline.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.any,
};

export default Headline;
