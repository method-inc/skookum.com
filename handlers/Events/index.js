import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import Content from 'EventsContent';
var {PropTypes} = React;

class Events extends React.Component {
  sortedEvents(location: string) {
    return location ? this.props.events[location] :
      Object.keys(this.props.events).reduce((events, location) => {
        if (this.props.events[location])
          this.props.events[location].forEach(n => events.push(n));
        return events;
      }, []).sort((a, b) => {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
      });
  }

  render(): ?ReactElement {
    var {location} = this.context.router.getCurrentParams();
    var events = this.sortedEvents(location)

    return (
      <div className="Events">
        <Hero title="Events" subtitle="We have some crazy awesome events & we’d love to hangout with you" />
        <Content events={events} />
      </div>
    );
  }
}

Events.displayName = 'Events';

Events.propTypes = {
  events: PropTypes.object.isRequired,
};

Events.contextTypes = {
  router: PropTypes.func.isRequired,
};

export default Resolver.createContainer(Events, {
  resolve: {
    events() {
      return fetch('http://localhost:4444/api/events').then(n => n.json());
    }
  }
});

