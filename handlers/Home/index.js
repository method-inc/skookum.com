import React from 'react';
import {Resolver} from 'react-resolver';
import Events from '../Events';

class Home extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Home">
        <Events />
      </div>
    );
  }
}

Home.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Home.displayName = 'Home';

export default Home;
