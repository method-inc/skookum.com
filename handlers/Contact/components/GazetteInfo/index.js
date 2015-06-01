/** @flow */

require('./styles.css');

import React from 'react';

class GazetteInfo extends React.Component {
  render(): ?ReactElement {
    return (
      <section className="GazetteInfo">
        <header className="GazetteInfo-header">
          <span className="GazetteInfo-header-small">Subscribe to the</span>
          <span>Skookum Gazette</span>
        </header>
        <p className="GazetteInfo-content">Where the bounds of literature are stretched, ideas are baked to a glorious temperature, and awesomeness is illustrated: the Skookum Gazette wants to reach your eye balls and crawl into your imagination. We want to build things with you, we want to share extraordinary concepts, and we want to basically change the world.</p>
        <p className="GazetteInfo-content">Sign up. Be bold.</p>
      </section>
    );
  }
}

GazetteInfo.propTypes = {};

export default GazetteInfo;
