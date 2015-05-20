/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';

var {PropTypes} = React;

class CaseStudy extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="HomeCaseStudy">
        <div className="HomeCaseStudy-content">
          <strong className="HomeCaseStudy-title">{this.props.study.slug}</strong>
          <p className="HomeCaseStudy-summary">{this.props.study.summary}</p>
          <Button to="case-studies">More Case Studies</Button>
        </div>
        <img className="HomeCaseStudy-image" src={this.props.study.image.fields.file.url} />
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
      return fetch(
        `http://localhost:4444/api/contentful?content_type=case_study&limit=1`
      ).then(n => n.json()).then(n => n[0]);
    }
  }
});
