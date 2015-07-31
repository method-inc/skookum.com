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

    return (
      <div className="Hero" style={style}>
        <div className="Hero-content">
          <div className="Hero-title">
              {title}
          </div>
          {children}
        </div>
        <div className="Hero-overlay" style={{
          background: backgroundColor,
        }} />
        {image && (
          <div className="Hero-image" style={{backgroundImage: `url(${image})`}} />
        )}
      </div>
    );
  }
}

Hero.propTypes = {
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

