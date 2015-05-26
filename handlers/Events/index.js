import React from 'react';
import Hero from 'Hero';
import EventsContent from 'EventsContent';
var {PropTypes} = React;

class Events extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Events">
        <Hero title="Events" subtitle="We have some crazy awesome events & we’d love to hangout with you" />
        <EventsContent />
      </div>
    );
  }
}

Events.contextTypes = {
  router: PropTypes.func.isRequired,
};

export default Events;
