require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {nameToRgba, nameToBinary} from 'nameToColor';

class Hamburger extends Component {
  render(): ?ReactElement {
    var className = 'Hamburger';
    var {target, onClick, color} = this.props;
    var {topOfViewport, navVisible} = this.context;
    var hamburgerClass = this.props.color === 'yellow' ? ' is-black' : '';
    var backgroundColor = nameToRgba(this.props.color);

    if (navVisible) className = className + ' is-x';
    if (!topOfViewport) className = className + ' is-floating';

    return (
      <a style={{backgroundColor: !topOfViewport && backgroundColor, ...this.props.style}} href={target} className={className} onClick={this.context.toggleNav}>
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

Hamburger.contextTypes = {
  navVisible: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  topOfViewport: PropTypes.bool.isRequired,
};

export default Hamburger;

