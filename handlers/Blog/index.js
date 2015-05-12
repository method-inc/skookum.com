require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
import {Resolver} from 'react-resolver';
import marked from 'marked';

import Hero from 'Hero';

class Blog extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Blog">
        <Hero title="Blog" subtitle="A collection of our team’s writings" />
        {this.props.articles.map(a => (
          a.slug &&
          <div key={a.id} className="Blog-article">
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
};

Blog.displayName = 'Blog';

export default Resolver.createContainer(Blog, {
  resolve: {
    articles() {
      return fetch('http://localhost:4444/api/contentful').then(n => n.json());
    }
  },
});
