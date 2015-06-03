/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import locations from 'locationsData';

var renderSegment: ReactElement = (segment: Location) => (
  <TabPanel key={segment.name}>
    <div className="ContactLocations-panel">
      <img className="ContactLocations-map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${segment.addr + ' ' + segment.location}&markers=label:Skookum%7C${segment.addr}&zoom=12&size=400x400`} />
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
            <Tab className="hmm">Charlotte</Tab>
            <Tab className="hmm">Denver</Tab>
          </TabList>
          {locations.map(renderSegment)}
        </Tabs>
      </div>
    );
  }
}

ContactLocations.propTypes = {};

export default ContactLocations;
