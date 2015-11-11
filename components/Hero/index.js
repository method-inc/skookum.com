/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {nameToRgba} from 'nameToColor';
import DocMeta from 'react-doc-meta';
import {getDefaultTags} from 'metaTags';

/*eslint-disable*/
var EMPTY_OBJECT = {};
/*eslint-enable*/


class Hero extends Component {

  constructor(props: mixed): void {
    super(props);
    this.state = {isMobile: false};
    this.renderBackground = this.renderBackground.bind(this);
  }

  componentDidMount(): void {
    if (typeof document === 'undefined') return;
    if (document.body.clientWidth < 1025) {
      this.setState({isMobile: true});
    }
  }

  renderBackground() {

    var {videos, image, poster} = this.props;
    if (videos && videos.length > 0 && !this.state.isMobile) {
      return (
        <div>
          <video preload="auto" autoPlay muted loop className="Hero-video" poster={poster} >
            {videos.map(video => (
              <source key={video.fields.file.url} src={video.fields.file.url} type={video.fields.file.contentType} />
            ))}
          </video>
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
      video,
      className = '',
      titleStyle,
      subtitleStyle,
      isLanding,
      metaTags,
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

    var tags = getDefaultTags(metaTags);

    return (
      <div className={`Hero ${skinny} ${landingClass}`}>
        <DocMeta tags={tags} />
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
  subtitle: PropTypes.any,
  color: PropTypes.oneOf(['black', 'yellow', 'red', 'orange']),
  image: PropTypes.string.isRequired,
  video: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

Hero.defaultProps = {
  color: 'orange',
};

export default Hero;

