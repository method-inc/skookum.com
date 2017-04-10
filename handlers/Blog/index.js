/* @flow */
require('./styles.css');

import React, {Component, PropTypes} from 'react';
import Hero from 'Hero';
import FilterBar from 'FilterBar';
import ArticlesList from 'ArticlesList';
import ContactSection from 'ContactSection';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';

class Blog extends Component {
  render(): ReactElement {
    var heroInfo = this.props.heroInfo[0];

    var metaTags = [
      {name: 'title', content: heroInfo.metaTitle},
      {name: 'description', content: heroInfo.metaDescription},
      {name: 'twitter:title', content: heroInfo.metaTitle},
      {name: 'twitter:description', content: heroInfo.metaDescription},
      {property: 'og:title', content: heroInfo.metaTitle},
      {property: 'og:description', content: heroInfo.metaDescription},
      {itemProp: 'name', content: heroInfo.metaTitle},
      {itemProp: 'description', content: heroInfo.metaDescription},
    ];

    return (
      <div className="Blog">
        <Hero color="black"
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title}
          subtitle={lookup(heroInfo, 'subtitle')}
          metaTags={metaTags} />
        <FilterBar items={this.props.tags} />
        <ArticlesList />
        <ContactSection />
      </div>
    );
  }
}

Blog.propTypes = {
  tags: PropTypes.array.isRequired,
};

Blog.defaultProps = {
  tags: [
    {to: 'blog', text: 'All'},
    {to: 'tag', params: {tag: 'development'}, text: 'Development'},
    {to: 'tag', params: {tag: 'product'}, text: 'Product'},
    {to: 'tag', params: {tag: 'business'}, text: 'Business'},
    {to: 'tag', params: {tag: 'culture'}, text: 'Culture'},
  ],
};

Blog.displayName = 'Blog';

export default Resolver.createContainer(Blog, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/blog`);
    },
  },
});
