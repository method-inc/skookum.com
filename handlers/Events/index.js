import React from 'react';
import Hero from 'Hero';
import EventsContent from 'EventsContent';
import FilterBar from 'FilterBar';
var {PropTypes} = React;

class Events extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Events">
        <Hero
          title="Events"
          subtitle="We have some crazy awesome events & we’d love to hangout with you"
          color="red"
          image="/public/images/hero-default-bg.png" />
        <FilterBar items={[
          {to: 'events', text: 'All'},
          {to: 'events-location', params: {location: 'charlotte'}, text: 'Charlotte'},
          {to: 'events-location', params: {location: 'denver'}, text: 'Denver'},
        ]} />
        <div className="InnerMax">
          <EventsContent />
        </div>
      </div>
    );
  }
}

Events.contextTypes = {
  router: PropTypes.func.isRequired,
};

export default Events;
