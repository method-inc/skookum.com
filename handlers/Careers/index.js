import React from 'react';
import Hero from 'Hero';
import CareersContent from 'CareersContent';
import CultureContent from '../Culture/components/CultureContent';

class Careers extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Careers">
        <Hero color="red" image="/public/images/hero-culture.png" title="Careers" subtitle="We never do the same thing twice" />
        <CultureContent />
        <CareersContent />
      </div>
    );
  }
}

export default Careers;

