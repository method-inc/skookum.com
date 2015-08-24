import React from 'react';
import Hero from 'Hero';
import CareersContent from 'CareersContent';
import CultureContent from '../Culture/components/CultureContent';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';

class Careers extends React.Component {
  render(): ?ReactElement {
    var heroInfo = this.props.heroInfo[0];
    return (
      <div className="Careers">
        <Hero color="black" 
          image={lookup(heroInfo.image, 'fields.file.url') || '/public/images/hero-default.png'}
          video={lookup(heroInfo.video, 'fields.file.url')}
          title={heroInfo.title} 
          subtitle={lookup(heroInfo, 'subtitle')} />
        <CultureContent />
        <CareersContent />
      </div>
    );
  }
}

Careers.displayName = 'Careers';

export default Resolver.createContainer(Careers, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/careers`);
    },
  },
});

