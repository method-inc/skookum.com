/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import invariant from 'react/lib/invariant';
import {Link} from 'react-router';
import Logo from 'Logo';
import Hamburger from 'Hamburger';

import {nameToRgba, nameToBinary} from 'nameToColor';

/*eslint-disable*/
var EMPTY_OBJECT = {};
/*eslint-enable*/


class Hero extends Component {
  render(): ?ReactElement {
    var {
      title,
      subtitle,
      children,
      childrenPosition,
      color,
      image = '',
      className = '',
      style = EMPTY_OBJECT,
    } = this.props;

    invariant(
      !(children && !childrenPosition),
      'You’ve attempted to render children into Hero without declaring ' +
      '`childrenPosition` to be `before` or `after`.'
    );

    className = 'Hero ' + className;
    if (color === 'yellow') {
      className = className + 'is-light';
    }

    var backgroundColor = nameToRgba(color) || nameToRgba(Hero.defaultProps.color);
    var contentStyle = childrenPosition === 'after' ? {bottom: 'auto', top: '4.5em'} : EMPTY_OBJECT;

    return (
      <div className="Hero" style={style}>
        <Link to="home">
          <Logo style={{position: 'absolute', top: '1em', left: '1em', width: 32, margin: '0.25em', zIndex: 5}} color={nameToBinary(color)} />
        </Link>
        <Hamburger style={{position: 'fixed', top: '1em', right: '1em', zIndex: 101}} color={backgroundColor} target="#navigation" onClick={this.toggleNav} />

        <div className="Hero-content" style={contentStyle}>
          {children && childrenPosition === 'before' && children}
          <h1 className="Hero-title">{title}</h1>
          <p className="Hero-subtitle">{subtitle}</p>
          {children && childrenPosition === 'after' && children}
        </div>

        <div className="Hero-overlay" style={{
          backgroundColor: backgroundColor,
        }} />
        {image && (
          <div className="Hero-image" style={{backgroundImage: `url(${image})`}} />
        )}
      </div>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.oneOf(['black', 'yellow', 'red', 'orange']),
  image: PropTypes.string.isRequired,
  childrenPosition: PropTypes.oneOf(['before', 'after']),
  children: PropTypes.node,
  style: PropTypes.object,
};

Hero.defaultProps = {
  color: 'orange',
};

export default Hero;

