import React from 'react';
import {Resolver} from 'react-resolver';

class Landing extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Landing">
        Landing
      </div>
    );
  }
}

Landing.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Landing.displayName = 'Landing';

export default Resolver.createContainer(Landing, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
