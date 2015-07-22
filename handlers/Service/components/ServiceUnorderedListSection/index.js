/** @flow */
require('./styles.css');

import React, {Component, PropTypes} from 'react';
import ServiceSection from 'ServiceSection';
import Typography from 'Typography';
import {nameToHex} from 'nameToColor';

const COLORS = {
  yellow: '#FFDD2E',
};

class ServiceUnorderedListSection extends Component {
  render(): ReactElement {
    var {
      color,
      title,
      items,
      ...props,
    } = this.props;

    return (
      <ServiceSection {...props} className="ServiceUnorderedListSection">
        <div className="ServiceUnorderedListSection-content">
          <Typography type={Typography.PAGE_HEADER}>{title}</Typography>
          <ul className="ServiceUnorderedListSection-list">
            {items.map(n => {
              if (typeof n === 'string') {
                return (
                  <li key={n} className="ServiceUnorderedListSection-item">
                    <span style={{color: nameToHex(color)}} className="ServiceUnorderedListSection-bullet">•</span>
                    {n}
                  </li>
                );
              }
              return (
                <li key={n.title} className="ServiceUnorderedListSection-item">
                  <Typography type={Typography.SECONDARY_SECTION_HEADER}>{n.title}</Typography>
                  <p>{n.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </ServiceSection>
    );
  }
}

ServiceUnorderedListSection.propTypes = {
  // TODO: share these constants
  color: PropTypes.oneOf(['black', 'red', 'orange', 'yellow']).isRequired,
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ServiceUnorderedListSection;
