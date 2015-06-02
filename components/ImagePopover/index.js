/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

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
    this.props.handleClick && this.props.handleClick(this.props.data)
  }

  getDirectionClass() {
    if (this.props.direction) {
      return prefix(direction);
    }
    return this.state && this.state.reverseDirection ? 'direction-reverse' : 'direction-default';

    // todo: handling for up/down popovers where one row is up and other is down (see home page case studies)
  }

  componentDidMount() {
    // todo: on resize and orientation change
    //make sure default right popover isn't off of page
    var imgRect = this.refs.image.getDOMNode().getBoundingClientRect();
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    //check if it's the last image
    if ((width - imgRect.width * 1.5) < imgRect.left) {
      this.setState({ reverseDirection: true });
    }
  }

  render(): ?ReactElement {
    var classPrefix = 'ImagePopover-';
    var directionClass = this.getDirectionClass();
    var isActiveClass = this.props.isActive ? 'is-active' : '';
    return (
      <div
        className="ImagePopover"
        id="this.props.id">
        <div
          ref="popover"
          className={classPrefix + 'content-wrapper' + ' ' + directionClass + ' ' + isActiveClass}>
          <div className={classPrefix + 'content'}>
            {this.props.content}
          </div>
        </div>
        <img
          ref="image"
          className={classPrefix + 'image'}
          src={this.props.imgUrl}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}/>

      </div>
    );
  }
}

ImagePopover.propTypes = {
  id: PropTypes.any.isRequired,
};

export default ImagePopover;
