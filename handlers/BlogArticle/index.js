require('./styles.css');

import React from 'react';
import markdown from 'markdown';
import {Resolver} from 'react-resolver';
import * as fmt from 'fmt';

import api from 'api';
import Hero from 'Hero';

var {PropTypes} = React;

class BlogArticle extends React.Component {
  render(): ?ReactElement {
    var {
      title,
      // tags,
      author,
      datePublished,
      body,
    } = this.props.article;
    var jobTitle = author.title || author.jobTitle;

    return (
      <article className="BlogArticle">
        <Hero
          title={title}
          image="/public/images/blog-post.png"
          subtitle={`By ${author.name} | ${fmt.date(new Date(datePublished))}`} />
        <div
          className="BlogArticle-content"
          dangerouslySetInnerHTML={{__html: markdown(body)}} />
        <div className="BlogArticle-author">
          <div className="BlogArticle-author-image">
            <img className="BlogArticle-author-img" src={author.photoUrl} />
          </div>
          <div className="BlogArticle-author-details">
            <div>
              <span className="BlogArticle-author-name">{author.name}</span>
              {jobTitle && <span className="BlogArticle-author-title">{jobTitle}</span>}
            </div>
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
    },
  },
});
