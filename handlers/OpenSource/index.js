require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import Button from 'Button';

import data from './data';

class OpenSource extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="OpenSource">
        <Hero title="Open Source" color="black" image="/public/images/hero-default-bg.png" />
        {data.map(o => (
          <a href={o.github} className="OpenSource-project">
            <div className="OpenSource-title">{o.name}</div>
            <div className="OpenSource-description">{o.description}</div>
            <div className="OpenSource-view">View on GitHub</div>
          </a>
        ))}
      </div>
    );
  }
}

OpenSource.propTypes = {};

export default OpenSource;

