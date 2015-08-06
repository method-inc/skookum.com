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

    this.wordInterval = this.wordInterval.bind(this);
  }

  componentDidMount(): void {
    setInterval(this.wordInterval, 3000);
  }

  wordInterval(): void {
    var currentWord = this.state.word,
        index = words.indexOf(this.state.word) + 1,
        word = index < words.length ? words[index] : words[0];
    this.setState({word});
  }

  render(): ReactElement {
    var {slug, client, summary, image} = this.props.study;
    return (
      <Hero
        childrenPosition="before"
        color="black"
        image={lookup(image, 'fields.file.url')}>
        <div className="HomeCaseStudy-banner">
          <div className="HomeCaseStudy-title">
            We solve hard <i>{this.state.word}</i> problems
          </div>
          <div className="HomeCaseStudy-description">
            For our clients, this means new revenue streams, substantial efficiency gains and a better quality of life for employees and customers.
          </div>
        </div>
        <Link key={slug} to="study-article" params={{slug: slug}}>
          <div className="HomeCaseStudy-feature">
            <div className="HomeCaseStudy-feature-title">
              {lookup(client, 'fields.name')}
            </div>
            <div className="HomeCaseStudy-feature-description">
              {summary}
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
      return api(`contentful?content_type=case_study&limit=1`).then(n => n[0]);
    },
  },
});
