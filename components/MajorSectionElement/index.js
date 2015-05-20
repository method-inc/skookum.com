/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class MajorSectionElement extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="MajorSectionElement">
        <div className="MajorSectionElement-title">{this.props.title}</div>
        <div className="MajorSectionElement-content">{this.props.content}</div>
      </div>
    );
  }
}

MajorSectionElement.propTypes = {
  title: PropTypes.any.isRequired,
  content: PropTypes.any.isRequired,
};

export default MajorSectionElement;
