/** @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';
import ContactForm from 'ContactForm';
import lookup from 'lookup';
import Hero from 'Hero';
import markdown from 'markdown';

class InnovationCamp extends React.Component {
  render(): ReactElement {

    var heroInfo = this.props.heroInfo[0];
    var capabilityHighlights = this.props.capabilityHighlights;
    return (
      <div className="InnovationCamp">
        <Hero color="black" 
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title} 
          subtitle={lookup(heroInfo, 'subtitle')} />

        <div className="InnovationCamp-statement">
          Innovation camp is a one week program to help propel innovative ideas forward.
        </div>

        <div className="InnovationCamp-title">The Schedule</div>

        <div className="Service-highlights">
          {capabilityHighlights.map((n, imageUrl) =>(
            (imageUrl = lookup(n.image, 'fields.file.url') || '/public/images/capability-highlight-default.png'),
            <div className="Service-highlight">
              <div className="Service-highlight-image" style={{backgroundImage: `url(${imageUrl})`}}/>
              <div className="Service-highlight-container">
                <div className="Service-highlight-title">
                  {n.title}
                </div>
                <div className="Service-highlight-description" dangerouslySetInnerHTML={{__html: markdown(n.description)}} />
              </div>
            </div>
          ))}
        </div>

        <div className="InnovationCamp-contact">
          <ContactForm header="Interested in more information?" labelColor="#fff" />
        </div>
      </div>
    );
  }
}

InnovationCamp.propTypes = {};

InnovationCamp.displayName = 'InnovationCamp';

export default Resolver.createContainer(InnovationCamp, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/innovation-camp`);
    },
    capabilityHighlights() {
      return api(`contentful/capability_highlights/innovation-camp`);
    },
  },
});
