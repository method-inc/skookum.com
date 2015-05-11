import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';

class Home extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Home">
        <Hero title="Careers" subtitle="We never do the same thing twice" />
      </div>
    );
  }
}

Home.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Home.displayName = 'Home';

export default Resolver.createContainer(Home, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
