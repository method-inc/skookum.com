/** @flow */
'use strict';

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {RouteHandler} from 'react-router';
import Navigation from 'Navigation';
import Footer from 'Footer';
import DocMeta from 'react-doc-meta';
import {getDefaultTags} from 'metaTags';

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
    var tags = getDefaultTags();

    var isServerRender = typeof window === 'undefined';

    if (isServerRender) {
      //tags to be placed in hidden string output then moved to
      var metaTags = DocMeta.rewind();
      metaTags = metaTags.map((tag, index) => <meta data-doc-meta="true" key={index} {...tag} />);
      var metaTagsHtml = React.renderToStaticMarkup(<div>‡{metaTags}‡</div>);

      //to prevent visibility of server-rendered meta content
      //before react mounts and removes it
      var hiddenStyle = {
        display: 'none',
      };
    }

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
        { isServerRender && <div style={hiddenStyle} dangerouslySetInnerHTML={{ __html: metaTagsHtml }} /> }
      </div>
    );
  }
}

AppBase.contextTypes = {
  router: PropTypes.func.isRequired,
};


export default AppBase;
