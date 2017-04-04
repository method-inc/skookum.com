/* @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import cx from 'classnames';
import Hero from 'Hero';
import ContactSection from 'ContactSection';
import lookup from 'lookup';
import api from 'api';

class Capabilities extends React.Component {
  get capabilities() {
    return {
      strategy: {
        title: 'Digital Strategy',
        description: `We help our clients pinpoint new opportunities, answer
        critical business technology questions and devise a plan to accelerate time-to-value.`,
        specialties: ['Rapid Innovation', 'Technology Assessment', 'Proof of Concept', 'Product Strategy'],
      },
      design: {
        title: 'Experience Design',
        description: `We combine human-centered design with deep technology expertise to
        radically simplify and differentiate across the customer journey.`,
        specialties: ['Journey Mapping', 'Design Sprints', 'Front-end Prototyping', 'Usability Testing'],
      },
      engineering: {
        title: 'Engineering',
        description: `We help our clients develop, integrate and scale their solutions by
        employing proven, repeatable processes and the latest project management tools.`,
        specialties: ['Custom Software Development', 'Team Augmentation', 'Integrations', 'Ongoing Support'],
      },
    };
  }

  render(): ReactElement {
    var {heroInfo} = this.props;
    heroInfo = heroInfo[0];

    var metaTags = [
      {name: 'title', content: heroInfo.metaTitle},
      {name: 'description', content: heroInfo.metaDescription},
      {name: 'twitter:title', content: heroInfo.metaTitle},
      {name: 'twitter:description', content: heroInfo.metaDescription},
      {property: 'og:title', content: heroInfo.metaTitle},
      {property: 'og:description', content: heroInfo.metaDescription},
      {itemProp: 'name', content: heroInfo.metaTitle},
      {itemProp: 'description', content: heroInfo.metaDescription},
    ];

    return (
      <div className="Capabilities">
        <Hero color="black"
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title}
          subtitle={lookup(heroInfo, 'subtitle')}
          metaTags={metaTags}
        />
        <div className="Capabilities-wrapper">
          {
            Object.keys(this.capabilities).map((capability, i) => (
              <section className={cx('CapabilityBlock', { 'CapabilityBlock--last': i === 2, 'CapabilityBlock--reverse': i === 1 })}
                key={capability}
              >
                <div className="CapabilityBlock-image" style={{ backgroundImage: `url(/public/images/${capability}.jpg)` }} />
                <div className="CapabilityBlock-meta">
                  <h2 className="CapabilityBlock-title">
                    { this.capabilities[capability].title }
                  </h2>
                  <p className="CapabilityBlock-description">
                  { this.capabilities[capability].description }
                  </p>

                  <span className="CapabilityBlock-underline" />

                  <ul className="CapabilityBlock-specialities">
                    { this.capabilities[capability].specialties.map(specialty => (
                        <li key={specialty} className="CapabilityBlock-specialty">
                          { specialty }
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </section>
            ))
          }
        </div>
        <ContactSection />
      </div>
    );
  }
}

Capabilities.propTypes = {};

Capabilities.displayName = 'Capabilities';

export default Resolver.createContainer(Capabilities, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/capabilities`);
    },
  },
});


