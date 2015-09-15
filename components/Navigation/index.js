/** @flow */

require('./styles.css');

import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import Logo from 'Logo';
import Hamburger from 'Hamburger';

var PRIMARY = [
  ['home', 'Home'],
  ['work', 'Work'],
  ['capabilities', 'capabilities'],
  ['blog', 'Blog'],
  ['contact', 'Contact'],
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

      if (this.previousScrollPos - window.scrollY <= 0) {
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
      document.body.className = 'noscroll';
    } else {
      document.body.className = '';
    }
    this.setState({overlayVisible: !this.state.overlayVisible});
  }

  render(): ?ReactElement {
    var mobileClassName = `Navigation-mobile ${this.state.overlayVisible ? 'is-visible' : 'is-not-visible'}`;

    var navVisible = this.state.showNav ? 'is-visible' : 'is-not-visible';
    var mainClass = `Navigation-main ${navVisible} ${this.state.atTop ? 'is-top' : ''}`;
    var hamburgerClass = `Navigation-hamburger ${navVisible}`;

    return (
      <div>
        <div className={mainClass}>
          <div className="Navigation-main-links">
            <Link to="home" className="Navigation-main-link" style={{display: 'inline'}}><Logo style={{position: 'relative', top: '10px', height: 40, width: 48}} color="#fff" /></Link>
            <Link to="work" className="Navigation-main-link">Work</Link>
            <Link to="capabilities" className="Navigation-main-link">Capabilities</Link>
            <Link to="blog" className="Navigation-main-link">Blog</Link>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
