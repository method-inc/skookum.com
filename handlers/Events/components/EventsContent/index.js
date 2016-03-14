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

var fmtTime = (date) => (
  `${fmtHours(date.getHours())}:${fmtMinutes(date.getMinutes())} ${fmtAMPM(date.getHours())}`
);

var fmtAMPM = hr => (
  hr < 12 ? 'am' : 'pm'
);

var fmtHours = hr => (
  hr <= 12 ? hr : hr - 12
);

var fmtMinutes = minute => (
  minute < 10 ? `0${minute}` : minute
);

class EventsContent extends React.Component {
  // TODO: create a Type for what the event structure should be

  getEvents(m, c) {
    let meetUp = this.getMeetupEvents(m),
      events = this.normalizeEvents([...meetUp, ...c]);

    return this.sortedEvents(events);
  }

  normalizeEvents(events) {
    return events.map(event=>{
      if (!event.group) {
        return {
          time: new Date(event.date).getTime(),
          ...event,
        };
      }
      return {
        title: event.name,
        subTitle: event.group.name,
        description: null,
        time: event.time,
        location: null,
        eventUrl: event.event_url,
      };
    });
  }

  getMeetupEvents(events) {
    return Object.keys(events).reduce((results, location) => {
      if (events[location]) {
        events[location].forEach(n => results.push(n));
      }
      return results;
    }, []);
  }

  sortedEvents(events): object|Array<object> {
    return events.sort((a, b) => {
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
    var startTime = fmtTime(_date);

    return (
      <div className="EventsContent-date">{month} {date}, {year} | {startTime}</div>
    );
  }

  renderLocation(location) {
    let {address, city, state, zip} = location;
    return (<div className="EventsContent-location">{address} {city}, {state} {zip}</div>);
  }

  render(): ?ReactElement {
    var events = this.getEvents(this.props.events, this.props.customEvents);
    return (
      <div className="EventsContent">
        <ol className="EventsContent-list">
          {events.length > 0 ? events.map(e => (
            <li key={e.eventUrl} className="EventsContent-item">
              <h2 className="EventsContent-eventName">{e.title}</h2>
              {this.renderDate(e.time)}
              <div className="EventsContent-groupName">{e.subTitle}</div>
              {e.location && this.renderLocation(e.location.fields)}
              {e.description &&
                <div className="EventsContent-description">{e.description}</div>
              }
              <Button className="EventsContent-button" type="white" href={e.eventUrl} target="_blank">View More Details & RSVP</Button>
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
    customEvents() {
      return api(`contentful/events`);
    },
  },
});

