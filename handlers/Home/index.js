/** @flow */
require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import Clients from 'Clients';
import CaseStudy from 'CaseStudy';
import Services from 'Services';
import Testimonial from 'Testimonial';
import ContactSection from 'ContactSection';
import {nameToHex} from 'nameToColor';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';

class Home extends React.Component {
  render(): ReactElement {
    var heroInfo = this.props.heroInfo[0];
    var textInfo = this.props.textInfo;
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
      <div className="Home">
        <Hero
          childrenPosition="before"
          color="black"
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          video={lookup(heroInfo, 'vimeo')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={<img className="Home-wordmark-image" src="/public/images/wordmark.svg" alt="Skookum" />}
          subtitle={<span>We help companies create <span style={{color: nameToHex('orange')}}>digital products</span> people love to use.</span>}
          metaTags={metaTags}/>
        <Services />
        <CaseStudy />
        <Clients />
        <ContactSection />
      </div>
    );
  }
}

Home.propTypes = {};

Home.displayName = 'Home';

export default Resolver.createContainer(Home, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/home`);
    },
    textInfo() {
      return api(`contentful/text/home`);
    },
  },
});
