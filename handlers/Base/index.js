/** @flow */
'use strict';

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {RouteHandler} from 'react-router';
import Navigation from 'Navigation';
import Footer from 'Footer';
import DocMeta from 'react-doc-meta';
import {setDefaultTags} from 'metaTags';
import cookie from 'react-cookie';

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

  componentWillMount() {
    var {router} = this.context;
    var query = JSON.stringify(router.getCurrentQuery());
    if (query && query.indexOf('utm') > -1) {
      cookie.save('utmCodes', query);
    }
  }

  render(): ReactElement {
    var tags = setDefaultTags();

    var handlerKey = this.getHandlerKey(),
        showNavs = handlerKey !== 'info' && handlerKey !== 'thankyou';

    return (
      <div className="AppBase">
        <DocMeta tags={tags} />
        {showNavs && <Navigation id="navigation" />}
        <div className="AppBase-nav-background" />
        <div className="AppBase-content">
          <RouteHandler key={handlerKey} />
        </div>
        {showNavs && <Footer />}
      </div>
    );
  }
}

AppBase.contextTypes = {
  router: PropTypes.func.isRequired,
};


export default AppBase;
