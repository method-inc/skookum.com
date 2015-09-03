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
  }
  
  getHandlerKey(): number {
    var childDepth = 1; // assuming App is top-level route
    var {router} = this.context;
    var key = router.getCurrentRoutes()[childDepth].name;
    var id = router.getCurrentParams().id;
    if (id) { key += id; }
    return key;
  }

  render(): ReactElement {
    return (
      <div className="AppBase">
        <Navigation id="navigation" />
        <div className="AppBase-nav-background" />
        <div className="AppBase-content">
          <RouteHandler key={this.getHandlerKey()} />
        </div>
        <Footer />
      </div>
    );
  }
}

AppBase.contextTypes = {
  router: PropTypes.func.isRequired,
};


export default AppBase;

