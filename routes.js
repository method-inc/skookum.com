/** @flow */
import React from 'react';
import Router from 'react-router';

const {
  DefaultRoute,
  Route,
  NotFoundRoute,
} = Router;

import App from './handlers/Base';
import Home from'./handlers/Home';
import Events from'./handlers/Events';
import Blog from'./handlers/Blog';
import BlogArticle from'./handlers/BlogArticle';
import Careers from'./handlers/Careers';
import CaseStudies from'./handlers/CaseStudies';
import Contact from'./handlers/Contact';
import Todo from'./handlers/Todo';
import NotFound from './handlers/NotFound';

var routes = (
  <Route path="/" handler={App}>
    <Route name="services" path="services" handler={Todo} />
    <Route name="case-studies" path="case-studies" handler={CaseStudies} />
    <Route path="events">
      <Route name="events-location" path=":location" handler={Events} />
      <DefaultRoute name="events" handler={Events} />
    </Route>
    <Route path="blog">
      <Route name="blog-paged" path="page/:page" handler={Blog} />
      <Route name="tag" path="tags/:tag" handler={Blog} />
      <Route name="article" path=":slug" handler={BlogArticle} />
      <DefaultRoute name="blog" handler={Blog} />
    </Route>
    <Route name="careers" path="careers" handler={Careers} />
    <Route name="contact" path="contact" handler={Contact} />
    <Route name="open-source" path="open-source" handler={Todo} />
    <DefaultRoute name="home" handler={Home} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

export default routes;

