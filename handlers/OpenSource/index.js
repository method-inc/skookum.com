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
          <div className="OpenSource-project">
            <div className="OpenSource-title">{o.name}</div>
            <div className="OpenSource-description">{o.description}</div>
            <Button className="OpenSource-button" style={{color: '#393939', backgroundColor: '#fff', textTransform: 'none', border: '1px solid #efefef', borderRadius: '0'}} href={o.github}>View on GitHub</Button>
          </div>
        ))}
      </div>
    );
  }
}

OpenSource.propTypes = {};

export default OpenSource;

