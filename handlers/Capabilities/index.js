/* @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Hero from 'Hero';
import {Link} from 'react-router';
import lookup from 'lookup';
import api from 'api';

class Capabilities extends React.Component {
  render(): ReactElement {
    var {capabilities, heroInfo} = this.props;
    heroInfo = heroInfo[0];
    return (
      <div className="Capabilities">
        <Hero color="black" 
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title} 
          subtitle={lookup(heroInfo, 'subtitle')} />
        <ul className="Capabilities-list">
          {capabilities.map((s, imageUrl) => (
            (imageUrl = lookup(s.heroImage, 'fields.file.url') || '/public/images/services-default.png'),
            <li style={{backgroundImage: `url(${imageUrl})`}}
                className="Capabilities-item" key={s.slug}>
              <Link className="Capabilities-link" to='capability' params={{capability: s.slug}}>
                <div className="Capabilities-overlay"></div>
                <div className="Capabilities-content">
                  <div className="Capabilities-title">{s.name}</div>
                  <span className="Capabilities-view">View Information</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>  
      </div>
    );
  }
}

Capabilities.propTypes = {};

Capabilities.displayName = 'Capabilities';

export default Resolver.createContainer(Capabilities, {
  resolve: {
    capabilities(props, context) {
      return api(`contentful/capabilities`);
    },
    heroInfo() {
      return api(`contentful/hero/capabilities`);
    },
  },
});


