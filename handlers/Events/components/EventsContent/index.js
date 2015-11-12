/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import api from 'api';

var {PropTypes} = React;

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

var pad = n => n < 10 ? `0${n}` : ('' + n);

var fmtTime = hr => (
  hr < 12 ? `${hr}:00 am` :
    hr === 12 ? '12:00 pm' :
    `${hr - 12}:00 pm`
);

class EventsContent extends React.Component {
  // TODO: create a Type for what the event structure should be
  sortedEvents(maybeLocation: ?string): object|Array<object> {
    return maybeLocation ? this.props.events[maybeLocation] :
      Object.keys(this.props.events).reduce((events, location) => {
        if (this.props.events[location]) {
          this.props.events[location].forEach(n => events.push(n));
        }
        return events;
      }, []).sort((a, b) => {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
      });
  }

  renderDate(time): ReactElement {
    var _date = new Date(time);
    var date = pad(_date.getDate());
    var month = MONTHS[_date.getMonth()];
    var year = _date.getFullYear();
    var startTime = fmtTime(_date.getHours());

    return (
      <div className="EventsContent-date">{month} {date}, {year} | {startTime}</div>
    );
  }

  render(): ?ReactElement {
    var {location} = this.context.router.getCurrentParams();
    var events = this.sortedEvents(location);

    return (
      <div className="EventsContent">
        <ol className="EventsContent-list">
          {events.length > 0 ? events.map(e => (
            <li key={e.event_url} className="EventsContent-item">
              <h2 className="EventsContent-eventName">{e.name}</h2>
              {this.renderDate(e.time)}
              <div className="EventsContent-groupName">{e.group.name}</div>
              <Button className="EventsContent-button" type="white" href={e.event_url} target="_blank">View More Details & RSVP</Button>
            </li>
          )) : (
            <li key="¯\_(ツ)_/¯" className="EventsContent-item">
              <div className="EventsContent-item-segment">
                <div className="EventsContent-eventName">There are no scheduled events at this time.</div>
              </div>
            </li>
          )}
        </ol>
      </div>
    );
  }
}

EventsContent.displayName = 'EventsContent';

EventsContent.propTypes = {
  events: PropTypes.object.isRequired,
};

EventsContent.contextTypes = {
  router: PropTypes.func.isRequired,
};

export default Resolver.createContainer(EventsContent, {
  resolve: {
    events() {
      return api(`events`);
    },
  },
});

