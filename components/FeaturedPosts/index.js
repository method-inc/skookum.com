/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import {Link} from 'react-router';
import api from 'api';

var {PropTypes} = React;

class FeaturedPosts extends React.Component {
  render(): ?ReactElement {
    return (
      <div className={`FeaturedPosts ${this.props.className}`}>
        {this.props.posts.slice(0, 3).map(f => (
          <Link key={f.slug} to="article" params={{slug: f.slug}} className="FeaturedPosts-featured">
            <span className="FeaturedPosts-title">{f.title}</span>
            <span className="FeaturedPosts-author">{f.author.fields.name}</span>
            {f.poster && f.poster.fields && (
              <img src={f.poster.fields.file.url + '?w=400'} className="FeaturedPosts-image" />
            )}
          </Link>
        ))}
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
