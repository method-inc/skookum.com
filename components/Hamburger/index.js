require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {nameToHex} from 'nameToColor';

class Hamburger extends Component {
  render(): ?ReactElement {
    var className = 'Hamburger';
    var {target, onClick, overlayVisible} = this.props;

    if (overlayVisible) className = className + ' is-x';

    return (
      <a href={target} className={className} onClick={this.props.onClick}>
        <div className="Hamburger-icon">
          <div className="Hamburger-top" />
          <div className="Hamburger-middle" />
          <div className="Hamburger-bottom" />
        </div>
      </a>
    );
  }
}

Hamburger.propTypes = {
  overlayVisible: PropTypes.bool.isRequired,
  target: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Hamburger;

