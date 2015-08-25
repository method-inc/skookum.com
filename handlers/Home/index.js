/** @flow */
require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import Clients from 'Clients';
import CaseStudy from 'CaseStudy';
import Button from 'Button';
import Services from 'Services';
import {nameToRgba} from 'nameToColor';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';

var cn = s => `Home-${s}`;

class Home extends React.Component {
  render(): ReactElement {
    var heroInfo = this.props.heroInfo[0];
    return (
      <div className="Home">
        <Hero
          childrenPosition="before"
          color="black"
          image={lookup(heroInfo.image, 'fields.file.url') || '/public/images/hero-default.png'}
          video={lookup(heroInfo.video, 'fields.file.url')}
          title={<img className="Home-wordmark-image" src="/public/images/wordmark.svg" alt="Skookum" />}
          subtitle={<span>Custom software for companies and the <span style={{color: nameToRgba('orange')}}>people</span> they empower.</span>} />
        <div className="Home-statement">
          Skookum is a full service software development shop.
        </div>
        <Services />
        <CaseStudy />
        <div className="Home-content">
          <div className="Home-content-container">
            <div className="Home-content-title">
              There is no limit.
            </div>
            <div className="Home-content-description">
              We’re a technically diverse bunch of strategists, designers and engineers. We have no proprietary platforms to sell. Your business needs determine our technology–not the other way around.
            </div>
            <Button className="Home-content-button" to="blog" style={{color: '#393939', backgroundColor: '#fff', textTransform: 'none', border: '0', borderRadius: '0'}}>Learn more about our capabilities</Button>
          </div>
        </div>
        <Clients />
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
  },
});


