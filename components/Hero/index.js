/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Hero extends React.Component {
  render(): ?ReactElement {
    var {
      title,
      subtitle,
      children,
    } = this.props;

    return (
      <div className="Hero" style={{backgroundColor: this.props.color}}>
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
};

Hero.defaultProps = {
  color: '#eb4e1b',
};

export default Hero;

