/* @flow */
'use strict';

import React, {Component, PropTypes} from 'react';

class Video extends Component {

  render(): ReactElement {
    return (
      <iframe src={this.props.src} style={{width: '100%', height: '450px'}} frameBorder={0} allowFullScreen />
    );
  }
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Video;
