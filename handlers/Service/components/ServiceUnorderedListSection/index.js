/** @flow */
require('./styles.css');

import React, {Component, PropTypes} from 'react';
import Icon from 'Icon';
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
        <Typography type={Typography.PAGE_HEADER}>{title}</Typography>
        <ul className="ServiceUnorderedListSection-list">
          {items.map(n => (
            <li className="ServiceUnorderedListSection-item">
              <span style={{color: nameToHex(color)}} className="ServiceUnorderedListSection-bullet">•</span>
              {n}
            </li>
          ))}
        </ul>
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

