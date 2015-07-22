require('./styles.css');

import React from 'react';
import markdown from 'markdown';
import {Resolver} from 'react-resolver';
import * as fmt from 'fmt';

import api from 'api';
import Hero from 'Hero';

var {PropTypes} = React;

class BlogArticle extends React.Component {

  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {
      defaultImages: {
        all: '/public/images/blogimg_all.png',
        development: '/public/images/blogimg_dev.png',
        product: '/public/images/blogimg_pro.png',
        business: '/public/images/blogimg_biz.png',
        culture: '/public/images/blogimg_cult.png',
      },
    };

    this.getDefaultImage = this.getDefaultImage.bind(this);
  }

  getDefaultImage(tags: Array): String {
    var defaultImages = this.state.defaultImages;

    if (tags.length > 0) {
      return this.state.defaultImages[tags[0].toLowerCase()];
    }
    return this.state.defaultImages.all;
  }

  render(): ?ReactElement {
    var {
      title,
      tags,
      author,
      datePublished,
      body,
      image,
    } = this.props.article;
    var jobTitle = author.title || author.jobTitle;

    if (!image || typeof image === 'undefined') {
      image = this.getDefaultImage(tags);
    } else {
      image = image.fields.file.url;
    }

    return (
      <article className="BlogArticle">
        <Hero
          title={title}
          image={image}
          subtitle={`By ${author.name} | ${fmt.date(new Date(datePublished))}`} />
        <div
          className="BlogArticle-content"
          dangerouslySetInnerHTML={{__html: markdown(body)}} />
        <div className="BlogArticle-share">
          <img className="BlogArticle-share-link" src="/public/images/linkedin-icon.svg" />
          <img className="BlogArticle-share-link" src="/public/images/twitter-icon.svg" />
          <img className="BlogArticle-share-link" src="/public/images/facebook-icon.svg" />
        </div>
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
