/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import NavBar from 'NavBar';
import Footer from 'Footer';

class AppBase extends React.Component {
  getHandlerKey() {
    var childDepth = 1; // assuming App is top-level route
    var {router} = this.context;
    if (typeof window !== 'undefined') window.router = router;
    var key = router.getCurrentRoutes()[childDepth].name;
    var id = router.getCurrentParams().id;
    if (id) { key += id; }
    return key;
  }

  render(): ?ReactElement {
    return (
      <div>
        <NavBar />
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

