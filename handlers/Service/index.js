/** @flow */
require('./styles.css');

import React, {PropTypes, Component} from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import ServiceContact from 'ServiceContact';
import api from 'api';
import lookup from 'lookup';
import {Link} from 'react-router';
import markdown from 'markdown';


class Service extends React.Component {
  render(): ReactElement {
    var {service} = this.context.router.getCurrentParams();
    var {capability, capabilityHighlights, capabilities} = this.props;
    capability = capability[0];

    var heroImage = lookup(capability.heroImage, 'fields.file.url') || '/public/images/hero-default.png';
    var headlineImage = lookup(capability.headlineImage, 'fields.file.url') || '/public/images/headline-default.png';

    return (
      <div className="Service">
        <Hero childrenPosition="before" color="black" image={heroImage} title={capability.name} />
        <div className="Service-statement" style={{backgroundImage: `url(${headlineImage})`}} >
          <div className="Service-statement-container">
            <div className="Service-statement-title">
              {capability.headline}
            </div>
            <div className="Service-statement-description" dangerouslySetInnerHTML={{__html: markdown(capability.description)}}/>
          </div>
        </div>
        <div className="Service-title">
          {capability.slogan}
        </div>
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
        <div className="Service-footer">
          <div className="Service-footer-links">
            {capabilities.map(n => (
              <Link to="service" params={{service: n.slug}} className="Service-footer-link">{n.name}</Link>
            ))}
          </div>
          <ServiceContact />
        </div>
      </div>
    );
  }
}

Service.propTypes = {};

Service.displayName = 'Service';


Service.contextTypes = {
  router: PropTypes.func.isRequired,
};


export default Resolver.createContainer(Service, {
  contextTypes: Service.contextTypes,

  resolve: {
    capabilityHighlights(props, context) {
      var {service} = context.router.getCurrentParams();
      return api(`contentful/capability_highlights/${service}`);
    },
    capability(props, context) {
      var {service} = context.router.getCurrentParams();
      return api(`contentful/capability/${service}`);
    },
    capabilities(props, context) {
      return api(`contentful/capabilities`);
    },
  },
});
