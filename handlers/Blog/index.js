require('./styles.css');

import qs from 'querystring'
import React from 'react';
import {Link} from 'react-router';
import {Resolver} from 'react-resolver';
import marked from 'marked';

import Hero from 'Hero';
import FilterBar from 'FilterBar';
import FeaturedPosts from 'FeaturedPosts';

const DEFAULT_PARAMS = {
  page: '1',
};

class Blog extends React.Component {
  render(): ?ReactElement {
    var params = Object.assign(
      {}, DEFAULT_PARAMS,
      this.context.router.getCurrentParams()
    );

    return (
      <div className="Blog">
        <Hero color="#000" title="Blog" subtitle="A collection of our team’s writings">
          <FeaturedPosts className="Blog-featured" />
        </Hero>
        <FilterBar items={this.props.tags} />
        {this.props.articles.map(a => (
          <div key={a.slug} className="Blog-article">
            <Link className="Blog-article-title" to="article" params={{slug: a.slug}}>{a.title}</Link>
            <div className="Blog-article-summary" dangerouslySetInnerHTML={{__html: marked(a.summary || (a.body.slice(0, 400) + '...'))}} />
            {/*<div className="Blog-article-tags">{a.tags.map(t => <a className="Blog-article-tag" href="#">{t}</a>)}</div>*/}
            <div className="Blog-article-info">
              <a href="#TODO" className="Blog-article-author">{a.author.fields.name}</a> | <span>{new Date(a.datePublished).toString()}</span>
            </div>
          </div>
        ))}
        <div className="Blog-pager">
          {params.page > 1 && <Link className="Blog-article-pager" to="blog-paged" params={{page: params.page - 1}}>Previous Page</Link>}
          {this.props.articles.length === 5 && <Link className="Blog-article-pager" to="blog-paged" params={{page: +params.page + 1}}>Next Page</Link>}
        </div>
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
  ]
};

Blog.displayName = 'Blog';

export default Resolver.createContainer(Blog, {
  resolve: {
    articles(props, context) {
      console.log(
        'requesting articles with %s',
        qs.stringify(props.params),
        props
      );
      return fetch(
        `http://localhost:4444/api/contentful?${qs.stringify(props.params)}`
      ).then(n => n.json());
    },
  },
});
