/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Hero extends React.Component {
  render(): ?ReactElement {
    var {
      title,
      subtitle,
    } = this.props;

    return (
      <div className="Hero">
        <h1 className="Hero-title">{title}</h1>
        <p className="Hero-subtitle">{subtitle}</p>
      </div>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;

