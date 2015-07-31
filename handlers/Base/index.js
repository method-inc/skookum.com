/** @flow */
'use strict';

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {RouteHandler} from 'react-router';
import Navigation from 'Navigation';
import Footer from 'Footer';

class AppBase extends Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {navVisible: false};
    this.toggleNav = this.toggleNav.bind(this);
    this.topOfViewport = true;
  }

  componentDidMount(): void {
    if (typeof window === 'undefined') return;
    window.addEventListener('scroll', _ => {
      var forceUpdate = false;
      if (window.scrollY === 0) {
        if (!this.topOfViewport) {
          forceUpdate = true;
        }
      }
      else {
        if (this.topOfViewport) {
          forceUpdate = true;
        }
      }

      if (forceUpdate) {
        this.topOfViewport = !this.topOfViewport;
        this.forceUpdate();
      }
    }, false);
  }

  getChildContext(): mixed {
    return {
      navVisible: this.state.navVisible,
      toggleNav: this.toggleNav,
      topOfViewport: this.topOfViewport,
    };
  }

  getHandlerKey(): number {
    var childDepth = 1; // assuming App is top-level route
    var {router} = this.context;
    var key = router.getCurrentRoutes()[childDepth].name;
    var id = router.getCurrentParams().id;
    if (id) { key += id; }
    return key;
  }

  toggleNav(): void {
    this.setState({navVisible: !this.state.navVisible});
  }

  render(): ReactElement {
    return (
      <div className="AppBase">
        <Navigation id="navigation" onClick={this.toggleNav} visible={this.state.navVisible} />
        <RouteHandler key={this.getHandlerKey()} />
        <Footer />
      </div>
    );
  }
}

AppBase.contextTypes = {
  router: PropTypes.func.isRequired,
};

AppBase.childContextTypes = {
  navVisible: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  topOfViewport: PropTypes.bool.isRequired,
};

export default AppBase;

