/** @flow */

import React from 'react';

import Camp from './Camp';
import Engineering from './Engineering';
import Production from './Production';
import ProofOfConcept from './ProofOfConcept';
import RapidInnovation from './RapidInnovation';

import {Link} from 'react-router';

import Todo from '../Todo';

var services = [
  'rapid-innovation',
  'innovation-camp',
  'proof-of-concept',
  'engineering',
  'production',
];

var first: number = (n: Array) => n[0];
var last: number = (n: Array) => n[n.length - 1];

var renderService: ReactElement = (service: string) => {
  switch (service) {
    case 'engineering':
      return <Engineering color="yellow" />
    case 'production':
      return <Production color="yellow" />
    case 'proof-of-concept':
      return <ProofOfConcept color="yellow" />
    case 'rapid-innovation':
      return <RapidInnovation color="yellow" />
    case 'innovation-camp':
      return <Camp color="yellow" />
    default:
      return <Todo />
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
      <div>
        {renderService(service)}
        <Link to="service" params={{service: previous}}>{previous}</Link>
        <Link to="service" params={{service: next}}>{next}</Link>
      </div>
    );
  }
}

Service.propTypes = {};

Service.displayName = 'Service';

export default Service;
