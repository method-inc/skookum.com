/** @flow */

require('./styles.css');

import React from 'react';

class NewsletterInfo extends React.Component {
  render(): ReactElement {
    return (
      <section className="NewsletterInfo">
        <header className="NewsletterInfo-header">
          <span className="NewsletterInfo-header-small">Subscribe to the</span>
          <span>Skookum Files</span>
        </header>
        <p className="NewsletterInfo-content">Where the bounds of literature are stretched, ideas are baked to a glorious temperature, and awesomeness is illustrated: the Skookum Newsletter wants to reach your eye balls and crawl into your imagination. We want to build things with you, we want to share extraordinary concepts, and we want to basically change the world.</p>
        <p className="NewsletterInfo-content">Sign up. Be bold.</p>
      </section>
    );
  }
}

NewsletterInfo.propTypes = {};

export default NewsletterInfo;
