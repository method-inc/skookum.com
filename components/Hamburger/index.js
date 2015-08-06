require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {nameToHex} from 'nameToColor';

class Hamburger extends Component {
  render(): ?ReactElement {
    var className = 'Hamburger';
    var {target, onClick, color, overlayVisible} = this.props;
    var hamburgerClass = this.props.color === 'yellow' ? ' is-black' : '';

    if (overlayVisible) className = className + ' is-x';

    return (
      <a href={target} className={className} onClick={this.props.onClick}>
        <div className="Hamburger-icon">
          <div className={'Hamburger-top' + hamburgerClass} />
          <div className={'Hamburger-middle' + hamburgerClass} />
          <div className={'Hamburger-bottom' + hamburgerClass} />
        </div>
      </a>
    );
  }
}

Hamburger.propTypes = {
  target: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Hamburger;

