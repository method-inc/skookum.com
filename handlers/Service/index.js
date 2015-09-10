/** @flow */
require('./styles.css');

import React, {PropTypes, Component} from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import ContactForm from 'ContactForm';
import api from 'api';
import lookup from 'lookup';
import {Link} from 'react-router';
import markdown from 'markdown';
import CapabilityHighlights from 'CapabilityHighlights';


class Service extends React.Component {
  render(): ReactElement {
    var {service} = this.context.router.getCurrentParams();
    var {capability, capabilityHighlights, capabilities} = this.props;
    capability = capability[0];

    var heroImage = lookup(capability.heroImage, 'fields.file.url') || '/public/images/hero-default.png';
    var headlineImage = lookup(capability.headlineImage, 'fields.file.url') || '/public/images/headline-default.png';
    var cite = lookup(capability, 'cite');

    return (
      <div className="Service">
        <Hero childrenPosition="before" color="black" image={heroImage} title={capability.name} />
        <div className="Service-statement" style={{backgroundImage: `url(${headlineImage})`}} >
          <div className="Service-statement-container">
            <div className="Service-statement-title">
              {capability.headline} 
              {cite && <span className="Service-statement-cite"> - {cite}</span>}
            </div>
            <div className="Service-statement-description" dangerouslySetInnerHTML={{__html: markdown(capability.description)}}/>
          </div>
        </div>
        <div className="Service-title">
          {capability.slogan}
        </div>
        <CapabilityHighlights highlights={capabilityHighlights} />
        <div className="Service-footer">
          <div className="Service-footer-links">
            {capabilities.map(n => (
              <Link to="service" params={{service: n.slug}} className="Service-footer-link">{n.name}</Link>
            ))}
          </div>
          <div className="Service-contact">
            <ContactForm header="Interested in more information?" labelColor="#fff"/>
          </div>
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
