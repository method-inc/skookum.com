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


class CaseStudyArticle extends React.Component {
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
      image = getDefaultImage(tags);
    } else {
      image = image.fields.file.url;
    }

    return (
      <article className="CaseStudyArticle">
        <Hero
          title={title}
          image={image}
          subtitle={`By ${author.name} | ${fmt.date(new Date(datePublished))}`} />
        <div
          className="CaseStudyArticle-content"
          dangerouslySetInnerHTML={{__html: markdown(body)}} />
        <div className="CaseStudyArticle-share">
          <ShareLinks title={title} />
        </div>
        <div className="CaseStudyArticle-author">
          <div className="CaseStudyArticle-author-image">
            <img className="CaseStudyArticle-author-img" src={author.photoUrl} />
          </div>
          <div className="CaseStudyArticle-author-details">
            <div>
              <span className="CaseStudyArticle-author-name">{author.name}</span>
              {jobTitle && <span className="CaseStudyArticle-author-title">{jobTitle}</span>}
            </div>
            {author.twitter && <span className="CaseStudyArticle-author-twitter">{author.twitter}</span>}
          </div>
        </div>
      </article>
    );
  }
}

CaseStudyArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

CaseStudyArticle.displayName = 'CaseStudyArticle';

export default Resolver.createContainer(CaseStudyArticle, {
  resolve: {
    article(props) {
      return api(`contentful/${props.params.slug}`);
    },
  },
});
