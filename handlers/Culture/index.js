/* @flow */
import React from 'react';
import Hero from 'Hero';
import CultureContent from 'CultureContent';

class Culture extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Culture">
        <Hero color="red" image="/public/images/hero-culture.png" title="Culture" subtitle="We never do the same thing twice" />
        <CultureContent />
      </div>
    );
  }
}

export default Culture;
