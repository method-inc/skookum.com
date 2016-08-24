/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {nameToRgba} from 'nameToColor';
import DocMeta from 'react-doc-meta';
import {setDefaultTags} from 'metaTags';

/*eslint-disable*/
var EMPTY_OBJECT = {};
/*eslint-enable*/


class Hero extends Component {

  constructor(props: mixed): void {
    super(props);
    this.state = {
      isMobile: false,
    };

    this.renderBackground = this.renderBackground.bind(this);
  }

  componentDidMount(): void {
    if (typeof document === 'undefined') return;
    if (document.body.clientWidth < 1025) {
      this.setState({ isMobile: true });
    }
  }

  renderBackground() {

    var { image, video } = this.props;
    if (video && !this.state.isMobile) {
      return (
        <div>
          <iframe src={`${video.replace('vimeo.com', 'player.vimeo.com/video')}?background=1&api=1`}
                  className="Hero-video" frameborder="0" ref="video" ></iframe>
          <div className="Hero-image Hero-image--mobile" style={{backgroundImage: `url(${image})`}} />
        </div>
      );
    }

    return (
      <div className="Hero-image" style={{backgroundImage: `url(${image})`}} />
    );
  }

  render(): ReactElement {
    var {
      title,
      subtitle,
      children,
      color,
      className = '',
      titleStyle,
      subtitleStyle,
      isLanding,
      metaTags,
      dontSetMetaTags,
    } = this.props;

    className = 'Hero ' + className;
    if (color === 'yellow') {
      className = className + 'is-light';
    }

    titleStyle = typeof title === 'undefined' ? titleStyle = {display: 'none'} : titleStyle;
    subtitleStyle = (typeof subtitle === 'undefined' || !subtitle) ? subtitleStyle = {display: 'none'} : subtitleStyle;

    var backgroundColor = nameToRgba(color) || nameToRgba(Hero.defaultProps.color);

    var skinny = typeof children === 'undefined' && (typeof subtitle === 'undefined' || !subtitle) ? 'is-skinny' : '';

    var landingClass = isLanding ? 'is-landing' : '';
    var tags = setDefaultTags(metaTags);

    return (
      <div className={`Hero ${skinny} ${landingClass}`}>
        {!dontSetMetaTags && <DocMeta tags={tags} />}
        <div className="Hero-content">
          <h1 className="Hero-title" style={titleStyle}>
            {title}
          </h1>
          <div className="Hero-subtitle" style={subtitleStyle}>
            {subtitle}
          </div>
          {children}
        </div>
        <div className={`Hero-overlay ${landingClass}`} style={{
          background: backgroundColor,
        }} />
        {this.renderBackground()}
      </div>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.any,
  subtitle: PropTypes.any,
  color: PropTypes.oneOf(['black', 'yellow', 'red', 'orange']),
  image: PropTypes.string.isRequired,
  video: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.any,
};

Hero.defaultProps = {
  color: 'orange',
};

export default Hero;
