/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import MajorSectionElement from 'MajorSectionElement';
import api from 'api';

var {PropTypes} = React;

var cn = s => `WallOfFaces-${s}`;

class WallOfFaces extends React.Component {
  render(): ReactElement {
    return (
      <div className="WallOfFaces">
        <div className={cn('title')}>
          Our People
          <hr className={cn('hr')} />
        </div>
        <ul className={cn('list')}>
          {this.props.people.map((n, i) => (
            <li key={i} className={cn('person')}>
              <strong className={cn('person-name')}>{n.displayName}</strong>
              <span className={cn('person-title')}>{n.jobTitle}</span>
              <img className={cn('person-image')} src={n.photoUrl} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

WallOfFaces.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    })
  ),
};

WallOfFaces.displayName = 'WallOfFaces';

export default Resolver.createContainer(WallOfFaces, {
  resolve: {
    people() {
      var FIELDS = [
        'displayName',
        'jobTitle',
        'photoUrl',
      ];

      return api(`team?fields=${FIELDS.toString()}`);
    },
  },
});

