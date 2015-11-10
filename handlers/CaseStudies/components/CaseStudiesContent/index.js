/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Resolver} from 'react-resolver';
import {Link} from 'react-router';
import api from 'api';
import lookup from 'lookup';

class CaseStudiesContent extends Component {
  render(): ReactElement {
    return (
      <div className="CaseStudiesContent">
        {this.props.caseStudies.items.map((f, imageUrl) => (
          (imageUrl = lookup(f.image, 'fields.file.url')),
          <Link key={f.slug} to="study-article" params={{slug: f.slug}} className="CaseStudiesContent-item">
            <div className="CaseStudiesContent-text">
              <h2 className="CaseStudiesContent-title">{f.clientname}</h2>
              <span className="CaseStudiesContent-description">{f.summary}</span>
            </div>
            <div className="CaseStudiesContent-overlay" />
            <div className="CaseStudiesContent-image" style={{backgroundImage: `url(${imageUrl})`}}/>
          </Link>
        ))}
      </div>
    );
  }
}

CaseStudiesContent.displayName = 'CaseStudiesContent';

CaseStudiesContent.propTypes = {
  caseStudies: PropTypes.object.isRequired,
};

export default Resolver.createContainer(CaseStudiesContent, {
  resolve: {
    caseStudies() {
      return api(`contentful?content_type=case_study`);
    },
  },
});
