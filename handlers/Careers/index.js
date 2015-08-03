import React from 'react';
import Hero from 'Hero';
import CareersContent from 'CareersContent';
import CultureContent from '../Culture/components/CultureContent';

class Careers extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Careers">
        <Hero color="red" image="/public/images/hero-culture.png" title="Careers" childrenPosition="after">
          In order to create real value you must put people at the center of everything.
        </Hero>
        <CultureContent />
        <CareersContent />
      </div>
    );
  }
}

export default Careers;

