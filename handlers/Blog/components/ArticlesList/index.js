/** @flow */

require('./styles.css');

import React from 'react';
import marked from 'marked';
import {Resolver} from 'react-resolver';
import {Link} from 'react-router';
import qs from 'querystring';
import api from 'api';

const DEFAULT_PARAMS = {
  page: '1',
};

class ArticlesList extends React.Component {
  render(): ?ReactElement {
    var params = Object.assign(
      {}, DEFAULT_PARAMS,
      this.context.router.getCurrentParams()
    );

    return (
      <div className="ArticlesList">
        {this.props.articles.map(a => (
          <div key={a.slug} className="Blog-article">
            <Link className="Blog-article-title" to="article" params={{slug: a.slug}}>{a.title}</Link>
            <div className="Blog-article-summary" dangerouslySetInnerHTML={{__html: marked(a.summary || (a.body.slice(0, 400) + '...'))}} />
            {/*<div className="Blog-article-tags">{a.tags.map(t => <a className="Blog-article-tag" href="#">{t}</a>)}</div>*/}
            <div className="Blog-article-info">
              <a href="#TODO" className="Blog-article-author">{a.author.fields.name}</a> | <span>{new Date(a.datePublished).toString()}</span>
            </div>
          </div>
        ))}
        <div className="Blog-pager">
          {params.page > 1 && <Link className="Blog-article-pager" to="blog-paged" params={{page: params.page - 1}}>Previous Page</Link>}
          {this.props.articles.length === 5 && <Link className="Blog-article-pager" to="blog-paged" params={{page: +params.page + 1}}>Next Page</Link>}
        </div>
      </div>
    );
  }
}

ArticlesList.contextTypes = {
  router: React.PropTypes.func.isRequired,
};

ArticlesList.propTypes = {
  // id: PropTypes.any.isRequired,
};

ArticlesList.displayName = 'ArticlesList';

export default Resolver.createContainer(ArticlesList, {
  resolve: {
    articles(props, context) {
      return api(`contentful?${qs.stringify(props.params)}`);
    },
  },
});
