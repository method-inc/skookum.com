/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';
import Hero from 'Hero';

class NotFound extends React.Component {
  render(): ?ReactElement {
    var heroInfo = this.props.heroInfo[0];
    return (
      <div>
        <Hero color="black" 
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title} 
          subtitle={lookup(heroInfo, 'subtitle')} />
        <div className="NotFound-statement">
          Please use the main navigation to locate the content you were originally searching for. Godspeed, friend.
        </div>
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

