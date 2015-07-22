/** @flow */
require('./styles.css');

import React, {Component, PropTypes} from 'react';
import ServiceSection from 'ServiceSection';

class ServiceSectionOfPercentages extends Component {
  render(): ReactElement {
    var {
      items,
      ...props,
    } = this.props;

    return (
      <ServiceSection {...props} className="ServiceSectionOfPercentages">
        <div className="ServiceSectionOfPercentages-content">
          {items.map(i => (
            <p key={i.description} className="ServiceSectionOfPercentages-item">
              <strong className="ServiceSectionOfPercentages-percentage">{i.percentage}%</strong>
              <span className="ServiceSectionOfPercentages-copy">{i.description}</span>
            </p>
          ))}
        </div>
      </ServiceSection>
    );
  }
}

ServiceSectionOfPercentages.propTypes = {
  // TODO: share these constants
  items: PropTypes.array.isRequired,
};

export default ServiceSectionOfPercentages;
