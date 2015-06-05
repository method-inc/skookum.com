/** @flow */
require('./styles.css');

import React, {Component, PropTypes} from 'react';
import ServiceSection from 'ServiceSection';
import Typography from 'Typography';

class ServiceSectionOfPercentages extends Component {
  render(): ReactElement {
    var {
      items,
      ...props,
    } = this.props;

    return (
      <ServiceSection {...props} className="ServiceSectionOfPercentages">
        {items.map(i => (
          <p className="ServiceSectionOfPercentages-item">
            <strong className="ServiceSectionOfPercentages-percentage">{i.percentage}%</strong>
            <span className="ServiceSectionOfPercentages-copy">{i.description}</span>
          </p>
        ))}
      </ServiceSection>
    );
  }
}

ServiceSectionOfPercentages.propTypes = {
  // TODO: share these constants
  items: PropTypes.array.isRequired,
};

export default ServiceSectionOfPercentages;

