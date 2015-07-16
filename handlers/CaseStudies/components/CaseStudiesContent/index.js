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
      <div className="InnerMax">
        <div className="CaseStudiesContent">
          {this.props.caseStudies.map((f, imageUrl) => (
            (imageUrl = lookup(f.image, 'fields.file.url')),
            <Link key={f.slug} to="article" params={{slug: f.slug}} className="CaseStudiesContent-item">
              <span className="CaseStudiesContent-title">{f.title}</span>
              <span className="CaseStudiesContent-description">{f.summary}</span>
              {imageUrl && (
                <img src={imageUrl + '?w=400'} className="CaseStudiesContent-image" />
              )}
              <div>{imageUrl}</div>
            </Link>
          ))}
        </div>
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
