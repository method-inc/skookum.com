/** @flow */

require('./styles.css');

import React from 'react';

import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import LinkedinIcon from './LinkedinIcon';

var {PropTypes} = React;

function popUpWindow(event: mixed): void {
  event.preventDefault();
  var target = event.target.closest('a');
  window.open(target.href,'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=500px, height=500px');
}

class ShareLinks extends React.Component {
  render(): ?ReactElement {
    var {
      title,
    } = this.props;

    var url = window.location.href;

    return (
      <div className="ShareLinks">
        <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`} onClick={popUpWindow}>
          <LinkedinIcon />
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${url}L&text=${title}`} onClick={popUpWindow}>
          <TwitterIcon />
        </a>
        <a href={`http://www.facebook.com/sharer/sharer.php?u=${url}&title=${title}`} onClick={popUpWindow}>
          <FacebookIcon />
        </a>
      </div>
    );
  }
}

ShareLinks.propTypes = {
  id: PropTypes.any.isRequired,
};

export default ShareLinks;
