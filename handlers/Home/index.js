require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import MajorSectionElement from 'MajorSectionElement';
import FeaturedPosts from 'FeaturedPosts';
import Clients from 'Clients';
import CaseStudy from 'CaseStudy';
import Button from 'Button';

var cn = s => `Home-${s}`;

var LOCATIONS = [
  { name: 'CLT',
    addr: '201 S. Tryon St. 15th Floor',
    location: 'Charlotte, NC 28202',
    phone: '345.123.2345',
  },
  { name: 'DEN',
    addr: '707 17th St Suite 3275',
    location: 'Denver, CO 80202',
    phone: '254.123.1643',
  },
];

class Home extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Home">
        <Hero title="Skookum" color="#000" style={{paddingTop: 200, paddingBottom: 300}} />
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
            <Button to="blog">More Blog Posts</Button>
          </div>
        </div>
        {LOCATIONS.map(n => (
          <div className={cn('location')}>
            <div className={cn('location-name')}>{n.name}</div>
            <div className={cn('location-detail')}>{n.addr}</div>
            <div className={cn('location-detail')}>{n.location}</div>
            <div className={cn('location-detail')}>{n.phone}</div>
          </div>
        ))}
      </div>
    );
  }
}

Home.propTypes = {};

Home.displayName = 'Home';

export default Home;
