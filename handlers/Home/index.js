import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import CareersContent from '../Careers/components/CareersContent';

class Home extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Home">
        <Hero title="Careers" subtitle="We never do the same thing twice" />
        <CareersContent />
      </div>
    );
  }
}

Home.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Home.displayName = 'Home';

export default Home;
