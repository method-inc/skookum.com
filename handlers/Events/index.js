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
          childrenPosition="after"
          color="black"
          image="/public/images/hero-default-bg.png"
          title="Events"/>
        <EventsContent />
      </div>
    );
  }
}

Events.contextTypes = {
  router: PropTypes.func.isRequired,
};

export default Events;
