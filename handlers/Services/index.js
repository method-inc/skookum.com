/* @flow */
require('./styles.css');

import React from 'react';

import Button from 'Button';
import Hero from 'Hero';
import Icon from 'Icon';
import Typography from 'Typography';
import {Link} from 'react-router';

const SERVICES = [
  ['Enterprise', 'enterprise', '/public/images/blogimg_all.png'],
  ['Consumer', 'consumer', '/public/images/blogimg_all.png'],
  ['Mobile', 'mobile', '/public/images/blogimg_all.png'],
  ['Cloud', 'cloud', '/public/images/blogimg_all.png'],
  ['Internet Of Things', 'internet-of-things', '/public/images/blogimg_all.png'],
  ['Wearables', 'wearables', '/public/images/blogimg_all.png'],
];

class Services extends React.Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {target: SERVICES[0][1]};
    this.handleSelectSegment = this.handleSelectSegment.bind(this);
  }

  render(): ReactElement {
    return (
      <div className="Services">
        <Hero
          childrenPosition="after"
          color="black"
          title="Capabilities"
          subtitle="We offer strategy, design, and development services across a range of domains."
          image="/public/images/hero-default-bg.png" />
        <ul className="Services-list">
          {SERVICES.map(s => (
            <li ref={s[1]} 
                style={{backgroundImage: `url(${s[2]})`}}
                className="Services-item" key={s[0]}>
              <Link className="Services-link" to='service' params={{service: s[1]}}>
                <div className="Services-overlay"></div>
                <div className="Services-content">
                  <div className="Services-title">{s[0]}</div>
                  <span className="Services-view">View Information</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>  
      </div>
    );
  }
}

Services.propTypes = {};

Services.displayName = 'Services';

export default Services;
