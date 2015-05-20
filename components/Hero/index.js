/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
var EMPTY_OBJECT = {};

class Hero extends React.Component {
  render(): ?ReactElement {
    var {
      title,
      subtitle,
      children,
      style = EMPTY_OBJECT,
    } = this.props;

    return (
      <div className="Hero" style={
        { ...style,
          backgroundColor: this.props.color
        }}>
        <h1 className="Hero-title">{title}</h1>
        <p className="Hero-subtitle">{subtitle}</p>
        {children}
      </div>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

Hero.defaultProps = {
  color: '#eb4e1b',
};

export default Hero;

