require('./styles.css');

import React from 'react';
import markdown from 'markdown';
import {Resolver} from 'react-resolver';
import api from 'api';
import Hero from 'Hero';
import NotFound from '../../handlers/NotFound';

var {PropTypes} = React;

class CaseStudyArticle extends React.Component {
  render(): ?ReactElement {
    if (this.props.article === 'notfound') { return <NotFound />; }
    var {
      title,
      tags,
      author,
      datePublished,
      body,
      image,
    } = this.props.article;
    var jobTitle = author.title || author.jobTitle;

    var metaTags = [
      {name: 'title', content: title},
      {name: 'description', content: body},
      {name: 'twitter:title', content: title},
      {name: 'twitter:description', content: body},
      {property: 'og:title', content: title},
      {property: 'og:description', content: body},
      {itemProp: 'name', content: title},
      {itemProp: 'description', content: body},
    ];

    return (
      <article className="CaseStudyArticle">
        <Hero
          title="Work"
          image={image.fields.file.url}
          color="black"
          subtitle={title} />
        <div
          className="CaseStudyArticle-content"
          dangerouslySetInnerHTML={{__html: markdown(body)}} />
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
      return api(`contentful/${props.params.slug}`).catch(err => 'notfound');
    },
  },
});
