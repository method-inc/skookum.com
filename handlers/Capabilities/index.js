/* @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import {Link} from 'react-router';
import lookup from 'lookup';
import api from 'api';

class Capabilities extends React.Component {
  render(): ReactElement {
    var {capabilities, heroInfo} = this.props;
    heroInfo = heroInfo[0];

    var metaTags = [
      {name: 'title', content: heroInfo.metaTitle},
      {name: 'description', content: heroInfo.metaDescription},
      {name: 'twitter:title', content: heroInfo.metaTitle},
      {name: 'twitter:description', content: heroInfo.metaDescription},
      {property: 'og:title', content: heroInfo.metaTitle},
      {property: 'og:description', content: heroInfo.metaDescription},
      {itemProp: 'name', content: heroInfo.metaTitle},
      {itemProp: 'description', content: heroInfo.metaDescription},
    ];

    return (
      <div className="Capabilities">
        <Hero color="black"
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title}
          subtitle={lookup(heroInfo, 'subtitle')}
          metaTags={metaTags} />
        <ul className="Capabilities-list">
          {capabilities.map((s, imageUrl) => (
            (imageUrl = lookup(s.heroImage, 'fields.file.url') || '/public/images/services-default.png'),
            <li style={{backgroundImage: `url(${imageUrl})`}}
                className="Capabilities-item" key={s.slug}>
              <Link className="Capabilities-link" to='capability' params={{capability: s.slug}}>
                <div className="Capabilities-overlay"></div>
                <div className="Capabilities-content">
                  <h2 className="Capabilities-title">{s.name}</h2>
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


