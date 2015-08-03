/** @flow */

require('./styles.css');

import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import locations from 'locationsData';

var renderSegment: ReactElement = (segment: Location) => (
  <TabPanel key={segment.name}>
    <div className="ContactLocations-panel">
      <div className="ContactLocations-contact">
        <div className="ContactLocations-name">{`${segment.name} Office`}</div>
        <div className="ContactLocations-addr">{segment.addr} {segment.location}</div>
        <div className="ContactLocations-phone">{segment.phone}</div>
      </div>
       <a href={`http://maps.google.com/?q=${segment.addr + ' ' + segment.location}`}>
        <div className={`ContactLocations-map is-${segment.name}`} style={{backgroundImage: `url(${segment.photo})`}}/>
      </a>
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
