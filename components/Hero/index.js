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
      color,
      image = '',
      className = '',
      style = EMPTY_OBJECT,
    } = this.props;

    className = 'Hero ' + className;
    if (color === 'yellow') {
      className = className + 'is-light';
    }

    var titleStyle = typeof title === 'undefined' ? titleStyle = {display: 'none'} : EMPTY_OBJECT;
    var subtitleStyle = typeof subtitle === 'undefined' ? subtitleStyle = {display: 'none'} : EMPTY_OBJECT;

    var backgroundColor = nameToRgba(color) || nameToRgba(Hero.defaultProps.color);

    var skinny = typeof children === 'undefined' && typeof subtitle === 'undefined' ? 'is-skinny': '';

    return (
      <div className={`Hero ${skinny}`} style={style}>
        <div className="Hero-content">
          <div className="Hero-title" style={titleStyle}>
              {title}
          </div>
          <div className="Hero-subtitle" style={subtitleStyle}>
            {subtitle}
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
  subtitle: PropTypes.object,
  color: PropTypes.oneOf(['black', 'yellow', 'red', 'orange']),
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
  style: PropTypes.object,
};

Hero.defaultProps = {
  color: 'orange',
};

export default Hero;

