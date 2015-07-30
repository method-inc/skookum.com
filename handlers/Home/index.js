/** @flow */
require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import MajorSectionElement from 'MajorSectionElement';
import FeaturedPosts from 'FeaturedPosts';
import Clients from 'Clients';
import CaseStudy from 'CaseStudy';
import Locations from 'Locations';
import Button from 'Button';
import Services from 'Services';

var cn = s => `Home-${s}`;

class Home extends React.Component {
  render(): ReactElement {
    return (
      <div className="Home">
        <Hero
          childrenPosition="before"
          color="black"
          image="/public/images/hero-case-studies.png">
          <div className="Home-banner">
            <div className="Home-bannerTitle">
              Custom software solutions for companies and the <span style={{color: '#FAAB18'}}>people</span> they serve.
            </div>
            <div className="Home-wordmark">
              <img className="Home-wordmark-image" src="/public/images/wordmark.svg" alt="Skookum" />
            </div>
          </div>
        </Hero>
        <div className="Home-statement">
          Skookum is a full service software development shop.
        </div>
        <Services />
        <CaseStudy />
        <div className="Home-content">
          <MajorSectionElement
            title="We create what’s next."
            content="Skookum® is a digital innovation shop for the web, mobile, and the internet of things. We help business leaders create meaningful new revenue, realize new efficiencies, and improve the quality of life for employees and customers." />
          <Clients />
          <div className="Home-featured">
            <blockquote className={cn('quote')}>
              <p className={cn('quote-quote')}>Man and his quest for knowledge and progress is determined and can not be deterred.</p>
              <cite className={cn('quote-cite')}>JFK</cite>
            </blockquote>
            <FeaturedPosts />
            <div className="Home-featuredButton">
              <Button color="#eee" type="more" to="blog">More Blog Posts</Button>
            </div>
          </div>
        </div>
        <Locations />
      </div>
    );
  }
}

Home.propTypes = {};

Home.displayName = 'Home';

export default Home;
