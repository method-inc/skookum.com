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

var cn = s => `Home-${s}`;

class Home extends React.Component {
  render(): ReactElement {
    return (
      <div className="Home">
        <Hero
          title={<img src="/public/images/wordmark.svg" alt="Skookum" />}
          color="blacklight"
          image="/public/images/mars.png" />
        <div className="Home-content">
          <MajorSectionElement
            title="We create what’s next."
            content="Skookum® is a digital innovation shop for the web, mobile, and the internet of things. We help business leaders create meaningful new revenue, realize new efficiencies, and improve the quality of life for employees and customers." />
          <CaseStudy />
          <Clients />
          <div className="Home-featured">
            <blockquote className={cn('quote')}>
              <p className={cn('quote-quote')}>Man and his quest for knowledge and progress is determined and can not be deterred.</p>
              <cite className={cn('quote-cite')}>JFK</cite>
            </blockquote>
            <FeaturedPosts />
            <div className="Home-featuredButton">
              <Button style={{width: '14em'}} color="#eee" type="more" to="blog">More Blog Posts</Button>
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
