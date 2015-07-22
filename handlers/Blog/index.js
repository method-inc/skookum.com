/* @flow */
require('./styles.css');

import React, {Component, PropTypes} from 'react';

import Hero from 'Hero';
import FilterBar from 'FilterBar';
import FeaturedPosts from 'FeaturedPosts';
import ArticlesList from 'ArticlesList';

class Blog extends Component {
  render(): ReactElement {
    return (
      <div className="Blog">
        <Hero childrenPosition="before" color="black" image="/public/images/hero-blog.png" title="Blog" subtitle="A collection of our team’s writings">
          <FeaturedPosts className="Blog-featured" />
        </Hero>
        <FilterBar items={this.props.tags} />
        <ArticlesList />
      </div>
    );
  }
}

Blog.propTypes = {
  tags: PropTypes.array.isRequired,
};

Blog.defaultProps = {
  tags: [
    {to: 'blog', text: 'All'},
    {to: 'tag', params: {tag: 'development'}, text: 'Development'},
    {to: 'tag', params: {tag: 'product'}, text: 'Product'},
    {to: 'tag', params: {tag: 'business'}, text: 'Business'},
    {to: 'tag', params: {tag: 'culture'}, text: 'Culture'},
  ],
};

Blog.displayName = 'Blog';

export default Blog;
