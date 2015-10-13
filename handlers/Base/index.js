/** @flow */
'use strict';

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {RouteHandler} from 'react-router';
import Navigation from 'Navigation';
import Footer from 'Footer';
import DocMeta from 'react-doc-meta';

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
    var tags = [
      {name: 'title', content: 'Skookum'},
      {name: 'description', content: 'Skookum is a full service software development company with capabilities spanning product strategy, UI/UX design, development and support.'},
      {itemProp: 'name', content: 'Skookum Digital Works'},
      {itemProp: 'description', content: 'Skookum is a full service software development company with capabilities spanning product strategy, UI/UX design, development and support.'},
      // {itemProp: 'image', content: skookumLogoUrl},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: '@skookum'},
      {name: 'twitter:title', content: 'Skookum'},
      {name: 'twitter:description', content: 'Skookum is a full service software development company with capabilities spanning product strategy, UI/UX design, development and support.'},
      {name: 'twitter:creator', content: '@skookum'},
      // {name: 'twitter:image', content: skookumLogoUrl},
      {property: 'og:title', content: 'Skookum'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'http://skookum.com/'},
      // {property: 'og:image', content: skookumLogoUrl},
      {property: 'og:description', content: 'Skookum is a full service software development company with capabilities spanning product strategy, UI/UX design, development and support.'},
      {property: 'og:site_name', content: 'Skookum Digital Works'},
    ];

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

    return (
      <div className="AppBase">
        <DocMeta tags={tags} />
        <Navigation id="navigation" />
        <div className="AppBase-nav-background" />
        <div className="AppBase-content">
          <RouteHandler key={this.getHandlerKey()} />
        </div>
        <Footer />
        { isServerRender && <div style={hiddenStyle} dangerouslySetInnerHTML={{ __html: metaTagsHtml }} /> }
      </div>
    );
  }
}

AppBase.contextTypes = {
  router: PropTypes.func.isRequired,
};


export default AppBase;

