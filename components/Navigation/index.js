/** @flow */

require('./styles.css');

import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import Logo from 'Logo';
import Hamburger from 'Hamburger';

var PRIMARY = [
  ['home', 'Home'],
  ['services', 'Services'],
  ['case-studies', 'Case Studies'],
  //['culture', 'Culture'],
  ['careers', 'Careers'],
  ['contact', 'Contact'],
];

var SECONDARY = [
  ['blog', 'Blog'],
  ['open-source', 'Open Source'],
  ['events', 'Events'],
];

var renderNavigation = (list, props) => (
  <ul className="Navigation-list">
    {list.map(n => (
      <li className="Navigation-item" key={n[0]}>
        <Link className="Navigation-link" to={n[0]} onClick={props.onClick}>{n[1]}</Link>
      </li>
    ))}
  </ul>
);

class Navigation extends Component {
  render(): ?ReactElement {
    var {visible} = this.props;
    var className = `Navigation-mobile ${visible ? 'is-visible' : 'is-not-visible'}`;

    return (
      <div>
        <div className="Navigation-main">
          <Link to="home" className="Navigation-main-link" style={{display: 'inline'}}><Logo style={{position: 'relative', top: '10px', height: 40}} color="#fff" /></Link>
          <Link to="case-studies" className="Navigation-main-link">Work</Link>
          <Link to="services" className="Navigation-main-link">Capabilities</Link>
          <Link to="events" className="Navigation-main-link">Events</Link>
          <Link to="contact" className="Navigation-main-link">Contact</Link>
        </div>
        <div className="Navigation-hamburger">
          <Hamburger style={{position: 'absolute', top: '0', right: '0', zIndex: '101'}} color="black" target="#navigation" />
        </div>
        <div className={className}>
          <div className="Navigation-content">
            <div className="Navigation-header">About Skookum</div>
            {renderNavigation(PRIMARY, this.props)}
            <div className="Navigation-divider" />
            <div className="Navigation-header">Community</div>
            {renderNavigation(SECONDARY, this.props)}
            <hr className="Navigation-hr" />
            <div className="Navigation-socials">
              <a className="Navigation-sublink" href="https://www.twitter.com/skookum">Twitter</a>
              <a className="Navigation-sublink" href="https://www.linkedin.com/company/skookum-digital-works">LinkedIn</a>
              <a className="Navigation-sublink" href="https://www.facebook.com/SkookumDigitalWorks">Facebook</a>
              <a className="Navigation-sublink" href="https://www.github.com/skookum">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Navigation;
