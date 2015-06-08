/** @flow */

require('./styles.css');

import React, {PropTypes, Component} from 'react';
import marked from 'marked';
import {Resolver} from 'react-resolver';
import {Link} from 'react-router';
import qs from 'querystring';
import Typography from 'Typography';
import api from 'api';
import * as fmt from 'fmt';

const DEFAULT_QUERY = {
  page: '1',
};

class ArticlesList extends Component {
  render(): ReactElement {
    var {router} = this.context;
    var params = router.getCurrentParams();
    var query = Object.assign(
      {}, DEFAULT_QUERY,
      router.getCurrentQuery()
    );

    var linkTo = router.getRouteAtDepth(router.getCurrentRoutes().length - 1);
    linkTo = linkTo ? linkTo.name : 'blog';

    return (
      <div className="ArticlesList">
        {this.props.articles.map(a => (
          <div key={a.slug} className="Blog-article">
            <Link className="Blog-article-title" to="article" params={{slug: a.slug}}>{a.title}</Link>
            <Typography className="Blog-article-summary" type={Typography.DESCRIPTION_TEXT} dangerouslySetInnerHTML={{__html: marked(a.summary || (a.body.split('\n')[0]))}} />
            <div className="Blog-article-info">
              <a href="#TODO" className="Blog-article-author">{a.author.fields.name}</a> | <span>{fmt.date(new Date(a.datePublished))}</span>
            </div>
          </div>
        ))}
        <div className="Blog-pager">
          {query.page > 1 && <Link className="Blog-article-pager" to={linkTo} params={params} query={{page: query.page - 1}}>Previous Page</Link>}
          {this.props.articles.length === 5 && <Link className="Blog-article-pager" params={params} to={linkTo} query={{page: +query.page + 1}}>Next Page</Link>}
        </div>
      </div>
    );
  }
}

ArticlesList.contextTypes = {
  router: PropTypes.func.isRequired,
};

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
};

ArticlesList.displayName = 'ArticlesList';

export default Resolver.createContainer(ArticlesList, {
  contextTypes: ArticlesList.contextTypes,

  resolve: {
    articles(props, context) {
      var params = context.router.getCurrentParams();
      var query = context.router.getCurrentQuery();
      return api(`contentful?${qs.stringify(params)}&${qs.stringify(query)}`);
    },
  },
});
