/** @flow */
require('./styles.css');

import React from 'react';

import Camp from './Camp';
import Engineering from './Engineering';
import InternetOfThings from './InternetOfThings';
import Production from './Production';
import ProofOfConcept from './ProofOfConcept';
import RapidInnovation from './RapidInnovation';
import Support from './Support';
import Hero from 'Hero';
import ServiceContact from 'ServiceContact';

import {Link} from 'react-router';

import Todo from '../Todo';

var services = [
  'internet-of-things',
  'rapid-innovation',
 // 'innovation-camp',
  'proof-of-concept',
  'engineering',
  'production',
  'support',
];

var first: number = (n: Array) => n[0];
var last: number = (n: Array) => n[n.length - 1];

var renderService: ReactElement = (service: string) => {
  switch (service) {
    case 'engineering':
      return <Engineering color="yellow" />;
    case 'innovation-camp':
      return <Camp color="yellow" />;
    case 'internet-of-things':
      return <InternetOfThings color="yellow" />;
    case 'production':
      return <Production color="yellow" />;
    case 'proof-of-concept':
      return <ProofOfConcept color="yellow" />;
    case 'rapid-innovation':
      return <RapidInnovation color="yellow" />;
    case 'support':
      return <Support color="yellow" />;
    default:
      return <Todo />;
  }
};

var before: string = (service: string) => {
  var index = services.indexOf(service);
  if (index === 0) return last(services);
  return services[index - 1];
};

var after: string = (service: string) => {
  var index = services.indexOf(service);
  if (index === services.length - 1) return first(services);
  return services[index + 1];
};

class Service extends React.Component {
  render(): ReactElement {
    var {service} = this.props.params;
    var previous = before(service);
    var next = after(service);

    return (
      <div className="Service">
        <Hero childrenPosition="before" color="black" image="/public/images/hero-blog.png" title="Enterprise" />
        <div className="Service-statement" style={{backgroundImage: `url(/public/images/blogimg_dev.png)`}} >
          <div className="Service-statement-container">
            <div className="Service-statement-title">
              You know there’s a better way, and nothing off-the-shelf suits you.
            </div>
            <div className="Service-statement-description">
              Sure, you might have some processes in common with your competitors, but your workflows might be more or less complex. We enjoy transforming businesses by building exactly what you need. Imagine your enterprise software free from licensing fees, proprietary hardware, and bloated features you pay for but don’t use. 
            </div>
          </div>
        </div>
        <div className="Service-title">
          We can help build you a better business.
        </div>
          <div className="Service-highlights">
          <div className="Service-highlight">
            <div className="Service-highlight-image" style={{backgroundImage: `url(/public/images/blogimg_dev.png)`}}/>
            <div className="Service-highlight-container">
              <div className="Service-highlight-title">
                New Software Applications
              </div>
              <div className="Service-highlight-description">
                Built from the ground up to your unique specs. We interview your employees and customers, review existing processes and design software that your people actually enjoy using.
              </div>
            </div>
          </div>
          <div className="Service-highlight">
            <div className="Service-highlight-image" style={{backgroundImage: `url(/public/images/blogimg_dev.png)`}}/>
            <div className="Service-highlight-container">
              <div className="Service-highlight-title">
                New Software Applications
              </div>
              <div className="Service-highlight-description">
                Built from the ground up to your unique specs. We interview your employees and customers, review existing processes and design software that your people actually enjoy using.
              </div>
            </div>
          </div>
          <div className="Service-highlight">
            <div className="Service-highlight-image" style={{backgroundImage: `url(/public/images/blogimg_dev.png)`}}/>
            <div className="Service-highlight-container">
              <div className="Service-highlight-title">
                New Software Applications
              </div>
              <div className="Service-highlight-description">
                Built from the ground up to your unique specs. We interview your employees and customers, review existing processes and design software that your people actually enjoy using.
              </div>
            </div>
          </div>
        </div>
        <div className="Service-footer">
          <div className="Service-footer-links">
            <Link to="service" params={{service: "internet-of-things"}} className="Service-footer-link">Enterprise</Link>
            <Link to="careers" className="Service-footer-link">Consumer</Link>
            <Link to="open-source" className="Service-footer-link">Mobile</Link>
            <Link to="events" className="Service-footer-link">Cloud</Link>
            <Link to="careers" className="Service-footer-link">Internet of things</Link>
            <Link to="open-source" className="Service-footer-link">Wearables</Link>
          </div>
          <ServiceContact />
        </div>
      </div>
    );
  }
}

Service.propTypes = {};

Service.displayName = 'Service';

export default Service;
