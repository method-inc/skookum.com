/** @flow */

require('./styles.css');

import React from 'react';
import {Icon} from 'Icon';

var {PropTypes} = React;

class Capability extends React.Component {
  image(capability) {
    const [first, second] = capability.toLowerCase().split(' ');
    return second || first;
  }

  render(): ?ReactElement {
    const { capability } = this.props;

    return (
      <div className="Capability">
        <img className="Capability-icon"
          src={`/public/images/${this.image(capability)}.svg`}
          alt={`${this.image(capability)}-icon`}
        />
        <h3 className="Capability-subTitle">
          { capability }
        </h3>

        <span className="Capability-underline" />

      </div>
    );
  }
}

Capability.propTypes = {
  capability: PropTypes.string.isRequired
};

export default Capability;
