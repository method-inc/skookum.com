/** @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';

class InnovationCamp extends React.Component {
  render(): ReactElement {
    return (
      <div></div>
    );
  }
}

InnovationCamp.propTypes = {};

InnovationCamp.displayName = 'InnovationCamp';

export default Resolver.createContainer(InnovationCamp, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/innovation-camp`);
    },
  },
});
