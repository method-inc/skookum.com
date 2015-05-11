import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import Content from 'EventsContent';

class Events extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Events">
        <Hero title="Events" subtitle="We have some crazy awesome events & we’d love to hangout with you" />
        <Content events={this.props.events} />
      </div>
    );
  }
}

Events.displayName = 'Events';

export default Resolver.createContainer(Events, {
  resolve: {
    events() {
      return fetch('http://localhost:4444/api/events').then(n => n.json());
    }
  }
});

