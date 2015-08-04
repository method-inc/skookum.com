/* @flow */
import React from 'react';
import Hero from 'Hero';
import CaseStudiesContent from 'CaseStudiesContent';

class CaseStudies extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CaseStudies">
        <Hero
          color="black"
          title="Work"
          image="/public/images/home-charlotte2.png" />
        <CaseStudiesContent />
      </div>
    );
  }
}

CaseStudies.propTypes = {};

export default CaseStudies;
