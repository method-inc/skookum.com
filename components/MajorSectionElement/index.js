/** @flow */

require('./styles.css');

import React from 'react';
import Typography from 'Typography';
var {PropTypes} = React;

class MajorSectionElement extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="InnerMax">
        <div className="MajorSectionElement">
          <div className="MajorSectionElement-title">
            <Typography type={Typography.PRIMARY_SECTION_HEADER}>{this.props.title}</Typography>
          </div>
          <div className="MajorSectionElement-content">
            <Typography type={Typography.TEXT} element="p">{this.props.content}</Typography>
          </div>
        </div>
      </div>
    );
  }
}

MajorSectionElement.propTypes = {
  title: PropTypes.any.isRequired,
  content: PropTypes.any.isRequired,
};

export default MajorSectionElement;
