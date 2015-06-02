/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Navigation from 'Navigation';
import Footer from 'Footer';
import Logo from 'Logo';
import Hamburger from 'Hamburger';

class AppBase extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {navVisible: false};
    this.toggleNav = this.toggleNav.bind(this);
  }

  getHandlerKey() {
    var childDepth = 1; // assuming App is top-level route
    var {router} = this.context;
    var key = router.getCurrentRoutes()[childDepth].name;
    var id = router.getCurrentParams().id;
    if (id) { key += id; }
    return key;
  }

  toggleNav() {
    this.setState({navVisible: !this.state.navVisible});
  }

  render(): ?ReactElement {
    return (
      <div className="AppBase">
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 5}}>
          <Link to="home">
            <Logo style={{width: 32, margin: '0.25em'}} color={this.state.navVisible && '#fff'} />
          </Link>
          <Hamburger target="#navigation" x={this.state.navVisible} onClick={this.toggleNav} />
        </div>
        <Navigation id="navigation" onClick={this.toggleNav} visible={this.state.navVisible} />

        <RouteHandler key={this.getHandlerKey()} />
        <Footer />
      </div>
    );
  }
}

AppBase.contextTypes = {
  router: React.PropTypes.func.isRequired,
};

export default AppBase;

