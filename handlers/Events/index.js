import React from 'react';
import Hero from 'Hero';
import EventsContent from 'EventsContent';
import FilterBar from 'FilterBar';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';
var {PropTypes} = React;

class Events extends React.Component {
  render(): ?ReactElement {
    var heroInfo = this.props.heroInfo[0];

    var metaTags = [
      {name: 'title', content: heroInfo.metaTitle},
      {name: 'description', content: heroInfo.metaDescription},
    ];

    return (
      <div className="Events">
        <Hero color="black" 
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title} 
          subtitle={lookup(heroInfo, 'subtitle')}
          metaTags={metaTags} />
        <EventsContent />
      </div>
    );
  }
}

Events.contextTypes = {
  router: PropTypes.func.isRequired,
};

Events.displayName = 'Events';

export default Resolver.createContainer(Events, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/events`);
    },
  },
});

