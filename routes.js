/** @flow */
import React from 'react';
import {DefaultRoute, Route, NotFoundRoute} from 'react-router';

import App from './handlers/Base';
import Blog from'./handlers/Blog';
import BlogArticle from'./handlers/BlogArticle';
import Careers from'./handlers/Careers';
import CaseStudies from'./handlers/CaseStudies';
import CaseStudyArticle from'./handlers/CaseStudyArticle';
import Contact from'./handlers/Contact';
import Culture from'./handlers/Culture';
import Events from'./handlers/Events';
import Home from'./handlers/Home';
import NotFound from './handlers/NotFound';
import OpenSource from'./handlers/OpenSource';
import Capabilities from './handlers/Capabilities';
import Capability from './handlers/Capability';
import StyleGuide from './handlers/StyleGuide';
import InnovationCamp from './handlers/InnovationCamp';
import Landing from './handlers/Landing';
import ThankYou from './handlers/ThankYou';
import About from './handlers/About';

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route path="work">
      <Route name="study-article" path=":slug" handler={CaseStudyArticle} />
      <DefaultRoute name="work" handler={CaseStudies} />
    </Route>
    <Route path="events">
      <Route name="events-location" path=":location" handler={Events} />
      <DefaultRoute name="events" handler={Events} />
    </Route>
    <Route path="blog">
      <Route name="tag" path="tags/:tag" handler={Blog} />
      <Route name="blog-article" path=":slug" handler={BlogArticle} />
      <DefaultRoute name="blog" handler={Blog} />
    </Route>
    <Route name="careers" path="careers" handler={Careers} />
    <Route name="culture" path="culture" handler={Culture} />
    <Route name="contact" path="contact" handler={Contact} />
    <Route name="open-source" path="open-source" handler={OpenSource} />
    <Route name="capabilities" path="capabilities">
      <Route name="capability" path=":capability" handler={Capability} />
      <DefaultRoute handler={Capabilities} />
    </Route>
    <Route name="styleguide" path="styleguide" handler={StyleGuide} />
    <Route name="innovation-camp" path="innovation-camp" handler={InnovationCamp} />
    <Route name="info" path="info/:slug" handler={Landing} />
    <Route name="thankyou" path="thankyou" handler={ThankYou} />
    <Route name="about" path="about" handler={About} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

export default routes;

