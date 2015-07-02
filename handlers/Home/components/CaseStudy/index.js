/** @flow */

require('./styles.css');

import React, {Component} from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import api from 'api';
import lookup from 'lookup';

var {PropTypes} = React;

class CaseStudy extends Component {
  render(): ReactElement {
    var {slug, client, summary, image} = this.props.study;
    return (
      <div className="HomeCaseStudy">
        <div className="HomeCaseStudy-content InnerMax">
          <div className="HomeCaseStudyInner">
            <strong className="HomeCaseStudy-title">{lookup(client, 'fields.name')}</strong>
            <p className="HomeCaseStudy-summary">{summary}</p>
            <Button to="case-studies" type="more" color="#eee">More Case Studies</Button>
          </div>
        </div>
        <img className="HomeCaseStudy-image" src={lookup(image, 'image[0].fields.file.url')} />
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
