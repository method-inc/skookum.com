/** @flow */
require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import Clients from 'Clients';
import CaseStudy from 'CaseStudy';
import Button from 'Button';
import Services from 'Services';
import {nameToHex} from 'nameToColor';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';
import Headline from 'Headline';

var cn = s => `Home-${s}`;

class Home extends React.Component {
  render(): ReactElement {
    var heroInfo = this.props.heroInfo[0];
    return (
      <div className="Home">
        <Hero
          childrenPosition="before"
          color="black"
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={<img className="Home-wordmark-image" src="/public/images/wordmark.svg" alt="Skookum" />}
          subtitle={<span>Custom software for companies and the <span style={{color: nameToHex('orange')}}>people</span> they empower.</span>} />
        <Headline text="Skookum is a full service software development firm." />
        <Services />
        <CaseStudy />
        <div className="Home-content">
          <div className="Home-content-container">
            <h2 className="Home-content-title">
              There is no limit.
            </h2>
            <div className="Home-content-description">
              We’re a diverse bunch of strategists, designers and engineers. We blend broad experience in bleeding-edge tech with deep expertise in implementing enterprise-grade solutions. If you can dream it, we can give it life.
            </div>
            <Button className="Home-content-button" to="capabilities" type="white" style={{border: 0}}>Learn more about our capabilities</Button>
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


