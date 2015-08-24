import React from 'react';
import Hero from 'Hero';
import CareersContent from 'CareersContent';
import CultureContent from '../Culture/components/CultureContent';

class Careers extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Careers">
        <Hero 
          color="black"
          image="/public/images/hero-culture2.png"
          title="Careers"
          subtitle="In order to create real value you must put people at the center of everything." />
        <CultureContent />
        <CareersContent />
      </div>
    );
  }
}

export default Careers;

