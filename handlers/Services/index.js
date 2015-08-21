/* @flow */
require('./styles.css');

import React from 'react';

import Button from 'Button';
import Hero from 'Hero';
import Icon from 'Icon';
import Typography from 'Typography';
import {Link} from 'react-router';

const SERVICES = [
  ['Enterprise', 'internet-of-things', '/public/images/blogimg_all.png'],
  ['Consumer', 'rapid-innovation', '/public/images/blogimg_all.png'],
  ['Mobile', 'proof-of-concept', '/public/images/blogimg_all.png'],
  ['Cloud', 'engineering', '/public/images/blogimg_all.png'],
  ['Internet Of Things', 'production', '/public/images/blogimg_all.png'],
  ['Wearables', 'support', '/public/images/blogimg_all.png'],
];

class Services extends React.Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {target: SERVICES[0][1]};
    this.handleSelectSegment = this.handleSelectSegment.bind(this);
  }

  // TODO: move this hash to a query param so the server can render correctly
  componentDidMount(): void {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;
    var needle = null;
    SERVICES.some(s => s[1] === hash && (needle = s[1]));
    if (needle) this.selectSegment(needle);
  }

  selectSegment(target: string): void {
    this.setState({target});
  }

  handleSelectSegment(event: mixed): void {
    // TODO: sync this with the breakpoints in ./styles.css
    var segment = event.target.getAttribute('href').replace('#', '');
    if (typeof matchMedia === 'function' && matchMedia('screen and (max-width: 600px').matches) {
      window.location = `/services/${segment}`;
      return;
    }

    if (event) event.preventDefault();
    this.selectSegment(segment);
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
