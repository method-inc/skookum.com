/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
import FilterBar from 'FilterBar';

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
  renderDate(time): ReactElement {
    var _date = new Date(time);
    var date = pad(_date.getDate());
    var month = MONTHS[_date.getMonth()];
    var year = _date.getFullYear();
    var startTime = fmtTime(_date.getHours());

    return [
      <div key="date" className="EventsContent-date">{date}</div>,
      <div key="month" className="EventsContent-month-year">{month} {year}</div>,
      <div key="time" className="EventsContent-time">{startTime}</div>,
    ];
  }

  render(): ?ReactElement {
    return (
      <div className="EventsContent">
        <FilterBar items={[
          {to: 'events', text: 'All'},
          {to: 'events-charlotte', text: 'Charlotte'},
          {to: 'events-denver', text: 'Denver'},
        ]} />
        <ol className="EventsContent-list">
          {this.props.events.map(e => (
            <li key={e.event_url} className="EventsContent-item">
              <div className="EventsContent-item-segment">
                {this.renderDate(e.time)}
              </div>
              <div className="EventsContent-item-segment">
                <div className="EventsContent-eventName">{e.name}</div>
                <div className="EventsContent-groupName">{e.group.name}</div>
              </div>
              <a className="EventsContent-button" href={e.event_url}>RSVP</a>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

EventsContent.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventsContent;
