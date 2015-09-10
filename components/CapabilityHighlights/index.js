/** @flow */

require('./styles.css');

import React from 'react';
import lookup from 'lookup';
import markdown from 'markdown';

var {PropTypes} = React;

class CapabilityHighlights extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CapabilityHighlights-highlights">
        {this.props.highlights.map((n, imageUrl) =>(
          (imageUrl = lookup(n.image, 'fields.file.url') || '/public/images/capability-highlight-default.png'),
          <div className="CapabilityHighlights">
            <div className="CapabilityHighlights-image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="CapabilityHighlights-container">
              <div className="CapabilityHighlights-title">
                {n.title}
              </div>
              <div className="CapabilityHighlights-description" dangerouslySetInnerHTML={{__html: markdown(n.description)}} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

CapabilityHighlights.propTypes = {

};

export default CapabilityHighlights;
