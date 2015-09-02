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
    var {capabilities, heroInfo} = this.props;
    heroInfo = heroInfo[0];
    return (
      <div className="Services">
        <Hero color="black" 
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title} 
          subtitle={lookup(heroInfo, 'subtitle')} />
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
    heroInfo() {
      return api(`contentful/hero/capabilities`);
    },
  },
});


