/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Headline extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Headline" style={this.props.style}>
        {this.props.text}
      </div>
    );
  }
}

Headline.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.obj,
};

export default Headline;
