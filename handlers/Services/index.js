/* @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Hero from 'Hero';
import {Link} from 'react-router';
import lookup from 'lookup';
import api from 'api';

class Services extends React.Component {
  render(): ReactElement {
    var {capabilities} = this.props;
    return (
      <div className="Services">
        <Hero
          childrenPosition="after"
          color="black"
          title="Capabilities"
          subtitle="We offer strategy, design, and development services across a range of domains."
          image="/public/images/hero-default-bg.png" />
        <ul className="Services-list">
          {capabilities.map((s, imageUrl) => (
            (imageUrl = lookup(s.heroImage, 'fields.file.url') || '/public/images/services-default.png'),
            <li style={{backgroundImage: `url(${imageUrl})`}}
                className="Services-item" key={s.slug}>
              <Link className="Services-link" to='service' params={{service: s.slug}}>
                <div className="Services-overlay"></div>
                <div className="Services-content">
                  <div className="Services-title">{s.name}</div>
                  <span className="Services-view">View Information</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>  
      </div>
    );
  }
}

Services.propTypes = {};

Services.displayName = 'Services';

export default Resolver.createContainer(Services, {
  resolve: {
    capabilities(props, context) {
      return api(`contentful/capabilities`);
    },
  },
});


