require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';

class CaseStudies extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CaseStudies">
        <Hero color="#000" title="Case Studies" subtitle="A close look at some of our past work.">
        </Hero>
        {this.props.caseStudies.map(f => (
          <Link key={f.slug} to="article" params={{slug: f.slug}} className="CaseStudies-item">
            <span className="CaseStudies-title">{f.title}</span>
            <span className="CaseStudies-description">{f.summary}</span>
            {f.image.fields && (
              <img src={f.image.fields.file.url + '?w=400'} className="CaseStudies-image" />
            )}
          </Link>
        ))}
      </div>
    );
  }
}

CaseStudies.propTypes = {
  caseStudies: React.PropTypes.array.isRequired,
};

CaseStudies.displayName = 'CaseStudies';

export default Resolver.createContainer(CaseStudies, {
  resolve: {
    caseStudies() {
      return fetch(
        `http://localhost:4444/api/contentful?content_type=case_study`
      ).then(n => n.json());
    }
  },
});
