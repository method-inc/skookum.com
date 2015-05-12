require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
import {Resolver} from 'react-resolver';
import marked from 'marked';

import Hero from 'Hero';
import FilterBar from 'FilterBar';

class Blog extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Blog">
        <Hero color="#000" title="Blog" subtitle="A collection of our team’s writings">
          {this.props.featured.slice(0, 3).map(f => (
            <Link key={f.slug} to="article" params={{slug: f.slug}} className="Blog-featured">
              <span className="Blog-featured-title">{f.title}</span>
              <span className="Blog-featured-author">{f.author.fields.name}</span>
              {f.poster.fields && (
                <img src={f.poster.fields.file.url} className="Blog-featured-image" />
              )}
            </Link>
          ))}
        </Hero>
        <FilterBar items={this.props.tags} />
        {this.props.articles.map(a => (
          <div key={a.slug} className="Blog-article">
            <Link className="Blog-article-title" to="article" params={{slug: a.slug}}>{a.title}</Link>
            <div className="Blog-article-summary" dangerouslySetInnerHTML={{__html: marked(a.summary || (a.body.slice(0, 200) + '...'))}} />
            {/*<div className="Blog-article-tags">{a.tags.map(t => <a className="Blog-article-tag" href="#">{t}</a>)}</div>*/}
            <div className="Blog-article-info">
              <a href="#TODO" className="Blog-article-author">{a.author.fields.name}</a> | <span>{new Date(a.datePublished).toString()}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Blog.propTypes = {
  articles: React.PropTypes.array.isRequired,
  tags: React.PropTypes.array.isRequired,
};

Blog.defaultProps = {
  tags: [
    {to: 'blog', text: 'All'},
    {to: 'blog', params: {tag: 'development'}, text: 'Development'},
    {to: 'blog', params: {tag: 'innovation'}, text: 'Innovation'},
    {to: 'blog', params: {tag: 'product'}, text: 'Product'},
    {to: 'blog', params: {tag: 'culture'}, text: 'Culture'},
  ]
};

Blog.displayName = 'Blog';

export default Resolver.createContainer(Blog, {
  resolve: {
    featured() {
      return fetch('http://localhost:4444/api/contentful/featured').then(n => n.json());
    },
    articles() {
      return fetch('http://localhost:4444/api/contentful').then(n => n.json());
    },
  },
});
