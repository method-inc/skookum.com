/** @flow */

require('./styles.css');

import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import locations from 'locationsData';

var renderSegment: ReactElement = (segment: Location) => (
  <TabPanel key={segment.name}>
    <div className="ContactLocations-panel">
      <div className="ContactMap"><iframe src={segment.map}></iframe></div>
      <div className="ContactLocations-name">{`${segment.name} Office`}</div>
      <div className="ContactLocations-nickname">{segment.nickname}</div>
      <div className="ContactLocations-addr">{segment.addr}</div>
      <div className="ContactLocations-location">{segment.location}</div>
      <div className="ContactLocations-phone">{segment.phone}</div>
    </div>
  </TabPanel>
);

class ContactLocations extends Component {
  render(): ReactElement {
    return (
      <div className="ContactLocations">
        <Tabs onSelect={this.handleSelected}
          selectedIndex={0}>
          <TabList>
            <Tab>Charlotte</Tab>
            <Tab>Denver</Tab>
          </TabList>
          {locations.map(renderSegment)}
        </Tabs>
      </div>
    );
  }
}

ContactLocations.propTypes = {};

export default ContactLocations;
