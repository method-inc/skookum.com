/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import api from 'api';

function lookup(o, s) {
  if (!o) return null;

  var path = s.split('.');
  for (var p in path) {
    if (!o[p]) return null;
    o = o[p];
  }
  return o[p];
}

var {PropTypes} = React;

class CaseStudy extends React.Component {
  render(): ?ReactElement {
    var {slug, summary, image} = this.props.study;
    return (
      <div className="HomeCaseStudy">
        <div className="HomeCaseStudy-content">
          <strong className="HomeCaseStudy-title">{slug}</strong>
          <p className="HomeCaseStudy-summary">{summary}</p>
          <Button to="case-studies">More Case Studies</Button>
        </div>
        <img className="HomeCaseStudy-image" src={lookup(image, 'fields.file.url')} />
      </div>
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
      return api(`contentful?content_type=case_study&limit=1`).then(n => n[0]);
    },
  },
});
