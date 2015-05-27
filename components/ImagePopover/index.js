/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

var prefix = s => `ImagePopover-${s}`;

//todo: handle configuring desired placement with prop
//todo: logic to ensure that edge-item popovers don't pop out of the viewport

class ImagePopover extends React.Component {
  onMouseEnter(e) {
    e.preventDefault();
    this.props.handleMouseEnter && this.props.handleMouseEnter(this.props.data)
  }

  onMouseLeave(e) {
    e.preventDefault();
    this.props.handleMouseLeave && this.props.handleMouseLeave(this.props.data)
  }

  onClick(e) {
    e.preventDefault();
    this.props.onClick && this.props.onClick(this.props.data)
  }

  render(): ?ReactElement {
    var classPrefix = prefix(this.props.type);
    return (
      <div
        className="ImagePopover"
        id="this.props.id"
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}>
        <div className={classPrefix + '-content-wrapper' + ' ' + (this.props.isActive ? 'is-active' : '')}>
          <div className={classPrefix + '-content'}>
            {this.props.content}
          </div>
        </div>
        <img className={classPrefix + '-image'} src={this.props.imgUrl} />

      </div>
    );
  }
}

ImagePopover.propTypes = {
  id: PropTypes.any.isRequired,
};

export default ImagePopover;
