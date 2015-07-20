require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import Button from 'Button';

import data from './data';

class OpenSource extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="OpenSource">
        <Hero title="Open Source" image="/public/images/hero-default-bg.png" subtitle="A few things we’re up to." />
        {data.map(o => (
          <div className="OpenSource-project">
            <div className="OpenSource-title">{o.name}</div>
            <div className="OpenSource-description">{o.description}</div>
            <Button className="OpenSource-button" href={o.github}>View on GitHub</Button>
          </div>
        ))}
      </div>
    );
  }
}

OpenSource.propTypes = {};

export default OpenSource;

