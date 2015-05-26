/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import {Link} from 'react-router';
import api from 'api';

var {PropTypes} = React;

class CaseStudiesContent extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CaseStudiesContent">
        {this.props.caseStudies.map(f => (
          <Link key={f.slug} to="article" params={{slug: f.slug}} className="CaseStudiesContent-item">
            <span className="CaseStudiesContent-title">{f.title}</span>
            <span className="CaseStudiesContent-description">{f.summary}</span>
            {f.image.fields && (
              <img src={f.image.fields.file.url + '?w=400'} className="CaseStudiesContent-image" />
            )}
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
    }
  },
});
