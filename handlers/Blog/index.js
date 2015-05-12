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
          <Link to="article" params={{slug: 'hmf-now-half-as-long'}} className="Blog-featured">
            <span className="Blog-featured-title">Hmf...now half as long</span>
            <span className="Blog-featured-author">Pat Morrell</span>
          </Link>
          <Link to="article" params={{slug: 'what-i-learned-at-a-startup'}} className="Blog-featured">
            <span className="Blog-featured-title">What I Learned At A Startup</span>
            <span className="Blog-featured-author">Glenn Goodrich</span>
          </Link>
          <Link to="article" params={{slug: 'software-joe-ryans-carolina-panther-tailgate-or-why-you-want-to-live-in-charlotte'}} className="Blog-featured">
            <span className="Blog-featured-title">Joe Ryan’s Tailgate, Or Why You Want to Live In Charlotte</span>
            <span className="Blog-featured-author">Tim Roberson</span>
          </Link>
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
    articles() {
      return fetch('http://localhost:4444/api/contentful').then(n => n.json());
    }
  },
});
