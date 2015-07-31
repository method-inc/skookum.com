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
        <img className="ContactLocations-map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${segment.addr + ' ' + segment.location}&markers=label:Skookum%7C${segment.addr}&zoom=12&size=400x400`} />
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
