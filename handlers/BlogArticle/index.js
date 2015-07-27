require('./styles.css');

import React from 'react';
import markdown from 'markdown';
import {Resolver} from 'react-resolver';
import * as fmt from 'fmt';

import api from 'api';
import Hero from 'Hero';
import ShareLinks from 'ShareLinks';

var {PropTypes} = React;

const IMAGES = {
  all: '/public/images/blogimg_all.png',
  development: '/public/images/blogimg_dev.png',
  product: '/public/images/blogimg_pro.png',
  business: '/public/images/blogimg_biz.png',
  culture: '/public/images/blogimg_cult.png',
};

function getDefaultImage(tags: Array): String {
  if (tags.length > 0 && IMAGES.hasOwnProperty(tags[0].toLowerCase())) {
    return IMAGES[tags[0].toLowerCase()];
  }
  return IMAGES.all;
}


class BlogArticle extends React.Component {
  render(): ?ReactElement {
    var {
      title,
      tags,
      author,
      datePublished,
      body,
      poster,
    } = this.props.article;
    var jobTitle = author.title || author.jobTitle;

    if (!poster || typeof poster === 'undefined') {
      poster = getDefaultImage(tags);
    } else {
      poster = poster.fields.file.url;
    }

    return (
      <article className="BlogArticle">
        <Hero
          title={title}
          image={poster}
          subtitle={`By ${author.name} | ${fmt.date(new Date(datePublished))}`} />
        <div
          className="BlogArticle-content"
          dangerouslySetInnerHTML={{__html: markdown(body)}} />
        <div className="BlogArticle-share">
          <ShareLinks title={title} />
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
