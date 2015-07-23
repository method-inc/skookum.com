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
    var {slug, client, summary, homepageImage} = this.props.study;
    return (
      <div className="HomeCaseStudy" style={{backgroundImage: 'url(' + homepageImage.fields.file.url + ')'}}>
        <div className="HomeCaseStudy-content">
          <div className="HomeCaseStudy-inner">
            <strong className="HomeCaseStudy-title">{lookup(client, 'fields.name')}</strong>
            <p className="HomeCaseStudy-summary">{summary}</p>
            <Button to="case-studies" type="more" color="#eee">More Case Studies</Button>
          </div>
        </div>
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
