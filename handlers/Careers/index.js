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
          subtitle={<span>In order to create real value you must put <span style={{color: '#FAAB18'}}>people</span> at the center of everything</span>}/>   
        <CultureContent />
        <CareersContent />
      </div>
    );
  }
}

export default Careers;

