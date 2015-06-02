require('./styles.css');

import React, {Component, PropTypes} from 'react';

class Hamburger extends Component {
  render(): ?ReactElement {
    var className = 'Hamburger';
    var {target, x, onClick} = this.props;

    if (x) className = className + ' is-x';

    return (
      <a href={target} className={className} onClick={onClick}>
        <div className="Hamburger-top" />
        <div className="Hamburger-middle" />
        <div className="Hamburger-bottom" />
      </a>
    );
  }
}

Hamburger.propTypes = {
  target: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  x: PropTypes.bool,
};

export default Hamburger;

