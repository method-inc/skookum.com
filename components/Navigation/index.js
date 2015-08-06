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

var renderNavigation = (list, scope) => (
  <ul className="Navigation-list">
    {list.map(n => (
      <li className="Navigation-item" key={n[0]}>
        <Link className="Navigation-link" to={n[0]} onClick={scope.toggleOverlay}>{n[1]}</Link>
      </li>
    ))}
  </ul>
);

class Navigation extends Component {

  constructor(props: mixed, context: mixed): void {
    super(props, context);
    this.state = {showNav: true, atTop: true, overlayVisible: false};
    this.previousScrollPos = 0;

    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  componentDidMount(): void {
    if (typeof window === 'undefined') return;
    if (window.scrollY) {
      this.setState({atTop: false});
    }
    window.addEventListener('scroll', _ => {
      var showNav = true;
      var atTop = false;

      if (this.previousScrollPos - window.scrollY < 0) {
        showNav = false;
      } else {
        showNav = true;
      }

      if (window.scrollY < 10) {
        showNav = true;
        atTop = true;
      }

      this.previousScrollPos = window.scrollY;
      this.setState({showNav: showNav, atTop: atTop});

    }, false);
  }

  componentWillUnmount(): void {
    if (typeof window === 'undefined') return;
    window.removeEventListener('scroll');
  }

  toggleOverlay(): void {
    if (!this.state.overlayVisible) {
      document.getElementsByTagName('body')[0].className = 'noscroll';
    } else {
      document.getElementsByTagName('body')[0].className = '';
    }
    this.setState({overlayVisible: !this.state.overlayVisible});
  }

  render(): ?ReactElement {
    var mobileClassName = `Navigation-mobile ${this.state.overlayVisible ? 'is-visible' : 'is-not-visible'}`;
    var mainClass = `Navigation-main ${this.state.showNav ? 'is-visible' : 'is-not-visible'}`;
    mainClass += this.state.atTop ? ' is-top' : '';
    var hamburgerClass = `Navigation-hamburger ${this.state.showNav ? 'is-visible' : 'is-not-visible'}`;

    return (
      <div>
        <div className={mainClass}>
          <div className="Navigation-main-links">
            <Link to="home" className="Navigation-main-link" style={{display: 'inline'}}><Logo style={{position: 'relative', top: '10px', height: 40}} color="#fff" /></Link>
            <Link to="case-studies" className="Navigation-main-link">Work</Link>
            <Link to="services" className="Navigation-main-link">Capabilities</Link>
            <Link to="events" className="Navigation-main-link">Events</Link>
            <Link to="contact" className="Navigation-main-link">Contact</Link>
          </div>
        </div>
        <div className={hamburgerClass}>
          <Hamburger onClick={this.toggleOverlay} overlayVisible={this.state.overlayVisible} color="black" target="#navigation" />
        </div>
        <div className={mobileClassName}>
          <div className="Navigation-content">
            <div className="Navigation-header">About Skookum</div>
            {renderNavigation(PRIMARY, this)}
            <div className="Navigation-divider" />
            <div className="Navigation-header">Community</div>
            {renderNavigation(SECONDARY, this)}
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

export default Navigation;
