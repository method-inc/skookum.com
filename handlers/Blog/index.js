require('./styles.css');

import React from 'react';

import Hero from 'Hero';
import FilterBar from 'FilterBar';
import FeaturedPosts from 'FeaturedPosts';
import ArticlesList from 'ArticlesList';

class Blog extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Blog">
        <Hero color="#000" title="Blog" subtitle="A collection of our team’s writings">
          <FeaturedPosts className="Blog-featured" />
        </Hero>
        <FilterBar items={this.props.tags} />
        <ArticlesList />
      </div>
    );
  }
}

Blog.contextTypes = {
  router: React.PropTypes.func.isRequired,
};

Blog.propTypes = {
  articles: React.PropTypes.array.isRequired,
  tags: React.PropTypes.array.isRequired,
};

Blog.defaultProps = {
  tags: [
    {to: 'blog', text: 'All'},
    {to: 'tag', params: {tag: 'development'}, text: 'Development'},
    {to: 'tag', params: {tag: 'innovation'}, text: 'Innovation'},
    {to: 'tag', params: {tag: 'product'}, text: 'Product'},
    {to: 'tag', params: {tag: 'culture'}, text: 'Culture'},
  ],
};

Blog.displayName = 'Blog';

export default Blog;
