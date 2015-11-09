require('./styles.css');

import React from 'react';
import markdown from 'markdown';
import {Resolver} from 'react-resolver';
import * as fmt from 'fmt';
import api from 'api';
import Hero from 'Hero';
import ShareLinks from 'ShareLinks';
import NotFound from '../../handlers/NotFound';
import DocMeta from 'react-doc-meta';

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
    if (this.props.article === 'notfound') { return <NotFound />; }
    var {
      title,
      tags,
      author,
      datePublished,
      body,
      poster,
      summary,
    } = this.props.article;
    var jobTitle = author.title || author.jobTitle;

    if (!poster || typeof poster === 'undefined') {
      poster = getDefaultImage(tags);
    } else {
      poster = poster.fields.file.url;
    }

    var metaTags = [
      {name: 'title', content: title},
      {name: 'description', content: summary},
      {itemProp: 'name', content: title},
      {itemProp: 'description', content: summary},
      // {itemProp: 'image', content: extractedImageOrSkookumLogo},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: '@skookum'},
      {name: 'twitter:title', content: title},
      {name: 'twitter:description', content: summary},
      {name: 'twitter:creator', content: author.twitter || '@skookum'},
      // {name: 'twitter:image', content: extractedImageOrSkookumLogo},
      {property: 'og:title', content: title},
      {property: 'og:type', content: 'article'},
      {property: 'og:url', content: `http://skookum.com/blog/${this.props.article.slug}`},
      // {property: 'og:image', content: 'http://example.com/image.jpg'},
      {property: 'og:description', content: summary},
      {property: 'og:site_name', content: 'Skookum Digital Works'},
    ];

    return (
      <article itemScope itemType="http://schema.org/BlogPosting" className="BlogArticle">
        <DocMeta tags={metaTags} />
        <Hero
          title={<div itemProp="headline">{title}</div>}
          image={poster}
          titleStyle={{textTransform: 'none', maxWidth: '600px', paddingRight: '5%'}}
          color="black" />
        <span className="BlogArticle-meta">
          <image itemProp="image" src={poster}/>
          <span itemProp="description">{summary}</span>
          <span itemProp="datePublished">{fmt.date(new Date(datePublished))}</span>
        </span>
        <div
          itemProp="articleBody"
          className="BlogArticle-content"
          dangerouslySetInnerHTML={{__html: markdown(body)}} />
        <div className="BlogArticle-author">
          {author.photoUrl &&
          <div className="BlogArticle-author-image">
            <img className="BlogArticle-author-img" src={author.photoUrl} />
          </div>}
          <div className="BlogArticle-author-details">
            <div>
              <span itemProp="author" className="BlogArticle-author-name">{author.name}</span>
              {jobTitle && <span className="BlogArticle-author-title">{jobTitle}</span>}
            </div>
            {author.twitter && <span className="BlogArticle-author-twitter">{author.twitter}</span>}
          </div>
        </div>
        <div className="BlogArticle-share">
          <ShareLinks title={title} />
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
      return api(`contentful/${props.params.slug}`).catch(err => 'notfound');
    },
  },
});
