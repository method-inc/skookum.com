/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';

var PRIMARY = [
  ['services', 'Services'],
  ['case-studies', 'Case Studies'],
  ['culture', 'Culture'],
  ['careers', 'Careers'],
  ['contact', 'Contact'],
];

var SECONDARY = [
  ['careers', 'Careers'],
  ['open-source', 'Open Source'],
  ['events', 'Events'],
];

class Navigation extends React.Component {
  render(): ?ReactElement {
    var {visible} = this.props;
    var className = `Navigation ${visible ? 'isnt-visible' : 'is-visible'}`;

    return (
      <div className={className}>
        <ul className="Navigation-list">
          {PRIMARY.map(n => (
            <li className="Navigation-item">
              <Link className="Navigation-link" to={n[0]}>{n[1]}</Link>
            </li>
          ))}
        </ul>
        <div className="Navigation-divider" />
        <ul className="Navigation-list">
          {SECONDARY.map(n => (
            <li className="Navigation-item">
              <Link className="Navigation-link" to={n[0]}>{n[1]}</Link>
            </li>
          ))}
        </ul>
        <hr className="Navigation-hr" />
        <div className="Navigation-socials">
          <a className="Navigation-sublink" href="https://www.twitter.com/skookum">Twitter</a>
          <a className="Navigation-sublink" href="https://www.linkedin.com">LinkedIn</a>
          <a className="Navigation-sublink" href="https://www.github.com/skookum">GitHub</a>
        </div>
      </div>
    );
  }
}

export default Navigation;
