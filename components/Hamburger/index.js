require('./styles.css');

import React, {Component, PropTypes} from 'react';

class Hamburger extends Component {
  render(): ?ReactElement {
    var className = 'Hamburger';
    var {target, onClick} = this.props;
    var {topOfViewport, navVisible} = this.context;

    if (navVisible) className = className + ' is-x';
    if (!topOfViewport) className = className + ' is-floating';

    return (
      <a style={{backgroundColor: !topOfViewport && this.props.color, ...this.props.style}} href={target} className={className} onClick={this.context.toggleNav}>
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
  target: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Hamburger.contextTypes = {
  navVisible: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  topOfViewport: PropTypes.bool.isRequired,
};

export default Hamburger;

