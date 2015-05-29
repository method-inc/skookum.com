require('./styles.css');

import React from 'react';
import marked from 'marked';
import {Resolver} from 'react-resolver';

import api from 'api';
import Hero from 'Hero';

var {PropTypes} = React;

class BlogArticle extends React.Component {
  render(): ?ReactElement {
    var {
      title,
      tags,
      author,
      datePublished,
      body,
    } = this.props.article;

    return (
      <article className="BlogArticle">
        <Hero
          title={title}
          subtitle={`By ${author.name} | ${new Date(datePublished).toString()}`} />
        <div
          className="BlogArticle-content"
          dangerouslySetInnerHTML={{__html: marked(body)}} />
        <div className="BlogArticle-author">
          <div className="BlogArticle-author-image">
            <img className="BlogArticle-author-img" src={author.photoUrl} />
          </div>
          <div className="BlogArticle-author-details">
            <div><span className="BlogArticle-author-name">{author.name}</span> | <span className="BlogArticle-author-name">{author.title || author.jobTitle || 'Guest Author'}</span></div>
            {author.twitter && <span className="BlogArticle-author-twitter">{author.twitter}</span>}
          </div>
        </div>
      </article>
    );
  }
}

BlogArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

BlogArticle.displayName = 'BlogArticle';

export default Resolver.createContainer(BlogArticle, {
  resolve: {
    article(props) {
      return api(`contentful/${props.params.slug}`);
    }
  },
});
