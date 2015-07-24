/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Resolver} from 'react-resolver';
import {Link} from 'react-router';
import api from 'api';
import lookup from 'lookup';

const IMAGES = {
  all: '/public/images/blogimg_all.png',
  development: '/public/images/blogimg_dev.png',
  product: '/public/images/blogimg_pro.png',
  business: '/public/images/blogimg_biz.png',
  culture: '/public/images/blogimg_cult.png',
};

function getDefaultImage(tags: Array): String {
  if (tags.length > 0 && IMAGES.hasOwnProperty(tags[0].toLowerCase())) {
    return IMAGES[tags[0].toLowerCase()];
  }
  return IMAGES.all;
}

class FeaturedPosts extends Component {
  render(): ReactElement {

    return (
      <div className={`FeaturedPosts ${this.props.className}`}>
        {this.props.posts.slice(0, 3).map((f, imageUrl) => {
          imageUrl =  lookup(f, 'poster.fields.file.url');

          if (!imageUrl || typeof imageUrl === 'undefined') {
            imageUrl = getDefaultImage(f.tags);
          }

          return (
            <Link key={f.slug} to="article" params={{slug: f.slug}} className="FeaturedPosts-featured">
              <span className="FeaturedPosts-title">{f.title}</span>
              <span className="FeaturedPosts-author">{f.author.fields.name}</span>
              {imageUrl && (
                <img src={imageUrl + '?w=400'} className="FeaturedPosts-image" />
              )}
            </Link>
          );
        })}
      </div>
    );
  }
}

FeaturedPosts.displayName = 'FeaturedPosts';

FeaturedPosts.defaultProps = {
  className: '',
};

FeaturedPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Resolver.createContainer(FeaturedPosts, {
  resolve: {
    className(props) {
      return props.className;
    },

    posts() {
      return api(`contentful/featured`);
    },
  },
});
