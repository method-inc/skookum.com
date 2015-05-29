require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import Button from 'Button';

import data from './data';

class OpenSource extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="OpenSource">
        <Hero title="Open Source" subtitle="A few things we’re up to." />
        {data.map(o => (
          <div className="OpenSource-project">
            <strong className="OpenSource-title">{o.name}</strong>
            <p className="OpenSource-description">{o.description}</p>
            <a className="EventsContent-button" href={o.github}>View on GitHub</a>
          </div>
        ))}
      </div>
    );
  }
}

OpenSource.propTypes = {};

export default OpenSource;

