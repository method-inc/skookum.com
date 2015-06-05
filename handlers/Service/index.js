/** @flow */
require('./styles.css');

import React from 'react';

import RapidInnovation from './RapidInnovation';
import Camp from './Camp';

import Todo from '../Todo';

class Service extends React.Component {
  render(): ReactElement {
    var {service} = this.props.params;

    switch (service) {
      case 'rapid-innovation':
        return <RapidInnovation color="yellow" />
      case 'innovation-camp':
        return <Camp color="yellow" />
      default:
        return <Todo />
    }
  }
}

Service.propTypes = {};

Service.displayName = 'Service';

export default Service;
