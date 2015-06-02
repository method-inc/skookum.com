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
          title="Case Studies"
          subtitle="A close look at some of our past work."
          image="/public/images/hero-case-studies.png" />
        <CaseStudiesContent />
      </div>
    );
  }
}

CaseStudies.propTypes = {};

export default CaseStudies;
