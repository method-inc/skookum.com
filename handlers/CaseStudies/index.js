require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import CaseStudiesContent from 'CaseStudiesContent';

class CaseStudies extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CaseStudies">
        <Hero color="orange" title="Case Studies" subtitle="A close look at some of our past work." />
        <CaseStudiesContent />
      </div>
    );
  }
}

CaseStudies.propTypes = {};

export default CaseStudies;
