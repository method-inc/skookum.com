/* @flow */
'use strict';

import React, {Component, PropTypes} from 'react';

class Video extends Component {

  render(): ReactElement {
    return (
      <iframe src={this.props.src} width="100%" frameBorder={0} height="450px" webkitallowfullscreen mozallowfullscreen allowfullscreen />
    );
  }
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Video;
