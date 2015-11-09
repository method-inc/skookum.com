/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';
import Hero from 'Hero';
import Headline from 'Headline';

class NotFound extends React.Component {
  render(): ?ReactElement {
    var heroInfo = this.props.heroInfo[0];

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
      <div>
        <Hero color="black" 
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title} 
          subtitle={lookup(heroInfo, 'subtitle')}
          metaTags={metaTags} />
        <Headline
          style={{padding: '1.8em 5%'}}
          text="Please use the main navigation to locate the content you were originally searching for. Godspeed, friend." />
        <RouteHandler />
      </div>
    );
  }
}

NotFound.displayName = 'NotFound';

export default Resolver.createContainer(NotFound, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/404`);
    },
  },
});

