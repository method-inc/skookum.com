/** @flow */

require('./styles.css');

import React, {Component} from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import api from 'api';
import lookup from 'lookup';
import {Link} from 'react-router';

var {PropTypes} = React;

const words = ['business', 'design', 'technical'];

class CaseStudy extends Component {

  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {
      word: 'business'
    };

    this._interval = null;
    this.wordInterval = this.wordInterval.bind(this);
  }

  componentDidMount(): void {
    this._interval = setInterval(this.wordInterval, 2000);
  }

  componentWillUnmount(): void {
    clearInterval(this._interval);
  }


  wordInterval(): void {
    var currentWord = this.state.word,
        index = words.indexOf(this.state.word) + 1,
        word = index < words.length ? words[index] : words[0];
    this.setState({word});
  }

  render(): ReactElement {
    var {slug, clientname, summary, image} = this.props.study.items[0];

    return (
      <Hero
        childrenPosition="before"
        color="black"
        image={lookup(image, 'fields.file.url')}>
        <div className="HomeCaseStudy-banner">
          <div className="HomeCaseStudy-title">
            We help businesses evolve.
          </div>
          <div className="HomeCaseStudy-description">
            For our clients, this means new revenue, substantial efficiency gains and a better quality of life for employees and customers.
          </div>
        </div>
        <Link key={slug} to="study-article" params={{slug: slug}}>
          <div className="HomeCaseStudy-feature">
            <div className="HomeCaseStudy-feature-container">
              <div className="HomeCaseStudy-feature-title">
                {clientname}
              </div>
              <div className="HomeCaseStudy-feature-description">
                {summary}
              </div>
            </div>
            <div className="HomeCaseStudy-feature-learn">
              Learn more
            </div>
          </div>
         </Link>
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
