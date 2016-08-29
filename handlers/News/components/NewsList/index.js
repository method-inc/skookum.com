/** @flow */

require('./styles.css');

import React, {PropTypes, Component} from 'react';
import markdown from 'markdown';
import {Resolver} from 'react-resolver';
import {Link} from 'react-router';
import qs from 'querystring';
import {scrollTo} from 'FilterBar';
import Typography from 'Typography';
import api from 'api';
import * as fmt from 'fmt';

const DEFAULT_QUERY = {
  page: '1',
};

class NewsList extends Component {
  render(): ReactElement {
    var {router} = this.context;
    var params = router.getCurrentParams();
    var query = Object.assign(
      {}, DEFAULT_QUERY,
      router.getCurrentQuery()
    );

    var linkTo = router.getRouteAtDepth(router.getCurrentRoutes().length - 1);
    linkTo = linkTo ? linkTo.name : 'news';

    var showNext = this.props.articles.items.length === 5;

    return (
      <div className="NewsList">
        {this.props.articles.items.map(a => (
          <div key={a.title} className="Blog-article Blog-article--small">
            <div className="Blog-article-content">
              <a className="Blog-article-title-link" href={a.url} target="_blank">
                <h2 className="Blog-article-title">{a.title}</h2>
              </a>
              <Typography className="Blog-article-summary" type={Typography.DESCRIPTION_TEXT} dangerouslySetInnerHTML={{__html: markdown(a.summary || '')}} />
              <a className="NewsList-url" href={a.url} target="_blank">{a.urlTitle} &raquo;</a>
              <div className="Blog-article-info">
                <span className="Blog-article-author">{a.source}</span> | <span>{fmt.date(new Date(a.date))}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="Blog-pager">
          {query.page > 1 && <Link onClick={scrollTo} className="Blog-article-pager is-previous" to={linkTo} params={params} query={{page: query.page - 1}}>Previous Page</Link>}
          <div className="Blog-page">Page {query.page} / {Math.round(this.props.articles.total / 5)}</div>
          <Link onClick={scrollTo} className={`Blog-article-pager is-next ${!showNext ? 'is-hidden' : ''}`}
            params={params} to={linkTo} query={{page: +query.page + 1}}>Next Page</Link>
        </div>
      </div>
    );
  }
}

NewsList.contextTypes = {
  router: PropTypes.func.isRequired,
};

NewsList.propTypes = {
  articles: PropTypes.object.isRequired,
};

NewsList.displayName = 'NewsList';

export default Resolver.createContainer(NewsList, {
  contextTypes: NewsList.contextTypes,

  resolve: {
    articles(props, context) {
      var query = context.router.getCurrentQuery();
      return api(`contentful?content_type=news&${qs.stringify(query)}`);
    },
  },
});
