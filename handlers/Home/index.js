import React from 'react';
import {Resolver} from 'react-resolver';

class Home extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Home">
        Home
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
