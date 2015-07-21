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
  render(): ReactElement {
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
    var contentStyle = childrenPosition === 'after' ? {bottom: 'auto', top: '10em'} : EMPTY_OBJECT;

    return (
      <div className="Hero" style={style}>
        <div className="Hero-links">
          <Link to="home" className="Hero-home">
            <Logo style={{position: 'absolute', top: '0', left: '0', height: 40, margin: '0', zIndex: 5}} color={nameToBinary(color)} />
          </Link>  
        </div>
        <div className="Hero-links Hero-links--fixed">
          <Hamburger style={{position: 'absolute', top: '0', right: '0', zIndex: 101}} color={backgroundColor} target="#navigation" onClick={this.toggleNav} />
        </div>
        <div className="Hero-content" style={contentStyle}>
          {children && childrenPosition === 'before' && children}
          <h1 className="Hero-title">{title}</h1>
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

