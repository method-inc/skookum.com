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
          (imageUrl = lookup(f.caseStudyGridImage, 'fields.file.url')),
          <Link key={f.slug} to="study-article" params={{slug: f.slug}} className="CaseStudiesContent-item" style={{backgroundImage: 'url(' + imageUrl + ')'}}>
            <span className="CaseStudiesContent-title">{f.title}</span>
            <span className="CaseStudiesContent-description">{f.summary}</span>
          </Link>
        ))}
      </div>
    );
  }
}

CaseStudiesContent.displayName = 'CaseStudiesContent';

CaseStudiesContent.propTypes = {
  caseStudies: PropTypes.array.isRequired,
};

export default Resolver.createContainer(CaseStudiesContent, {
  resolve: {
    caseStudies() {
      return api(`contentful?content_type=case_study`);
    },
  },
});
