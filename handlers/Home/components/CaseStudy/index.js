/** @flow */

require('./styles.css');

import React, {Component} from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import api from 'api';
import lookup from 'lookup';
import {Link} from 'react-router';

var {PropTypes} = React;

class CaseStudy extends Component {

  render(): ReactElement {
    var {slug, clientname, summary, image} = this.props.study.items[0];

    return (
      <Hero
        childrenPosition="before"
        color="black"
        image={lookup(image, 'fields.file.url')}
        dontSetMetaTags={true}>
        <div className="HomeCaseStudy-banner">
          <h2 className="HomeCaseStudy-title">
            We focus on people – and that starts with you.
          </h2>
          <div className="HomeCaseStudy-description">
            Great software experiences empower people to do remarkable things. We believe that a great software partner should do the same.
          </div>
        </div>
        <Link key={slug} to="study-article" params={{slug: slug}}>
          <div className="HomeCaseStudy-feature">
            <div className="HomeCaseStudy-feature-container">
              <h3 className="HomeCaseStudy-feature-title">
                Client Success Story
              </h3>
              <div className="HomeCaseStudy-feature-description">
                With the help of a new mobile solution, sales force productivity at Coca Cola Bottling increased 25%.
              </div>
            </div>
            <div className="HomeCaseStudy-feature-learn">
              Learn more
            </div>
          </div>
         </Link>
         <Link className="HomeCaseStudy-feature-learn is-mobile" key="hcs-mobile-link" to="work">View our work</Link>
      </Hero>
    );
  }
}

CaseStudy.displayName = 'CaseStudy';

CaseStudy.propTypes = {
  study: PropTypes.any.isRequired,
};

export default Resolver.createContainer(CaseStudy, {
  resolve: {
    study() {
      return api(`contentful?content_type=case_study&limit=1&fields.featured=true`);
    },
  },
});
