import React from 'react';
import Hero from 'Hero';
import CultureContent from '../Culture/components/CultureContent';
import CareersContent from 'CareersContent';

class Careers extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Careers">
        <Hero color="red" image="/public/images/hero-culture.png" title="Careers" subtitle="We never do the same thing twice" />
        <div className="InnerMax">
          <CultureContent />
          <CareersContent />
        </div>
      </div>
    );
  }
}

export default Careers;

