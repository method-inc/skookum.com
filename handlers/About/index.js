/* @flow */
require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';
import markdown from 'markdown';
import Leader from 'Leader';
import Value from 'Value';
var {PropTypes} = React;

class About extends React.Component {
  render(): ?ReactElement {
    var heroInfo = this.props.heroInfo[0];
    var textInfo = this.props.textInfo;
    var storyText = textInfo.find(n => n.id === 'our-story');
    var leadershipText = textInfo.find(n => n.id === 'leadership');
    var leadersInfo = this.props.leadersInfo;
    var valuesInfo = this.props.valuesInfo;

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
      <div className="About">
        <Hero color="black"
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title}
          subtitle={lookup(heroInfo, 'subtitle')}
          metaTags={metaTags} />
        {!!storyText && <section className="About-story" style={{backgroundImage: `url(${lookup(storyText, 'image.fields.file.url')})`}}>
          <div className="About-wrapper">
            <h2 className="About-story-title">{storyText.title}</h2>
            <div className="About-story-text" dangerouslySetInnerHTML={{__html: markdown(storyText.text)}}/>
          </div>
        </section>}

        <section className="About-leadership">
          {!!leadershipText && <div className="About-wrapper">
            <h2 className="About-leadership-title">{leadershipText.title}</h2>
            <div className="About-leadership-text" dangerouslySetInnerHTML={{__html: markdown(leadershipText.text)}}/>
          </div>}
          <ul className="About-leadership-list">
            {leadersInfo.map((n, i) => 
              <Leader key={i} leader={n} index={i} />
            )}
          </ul>
        </section>
        <section className="About-values">
          <h2 className="About-values-title">Our Values</h2>
          <ul className="About-values-list">
            {valuesInfo.map((n, i) => 
              <Value value={n} key={i}/>
            )}
          </ul>
        </section>
      </div>
    );
  }
}

About.displayName = 'About';

export default Resolver.createContainer(About, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/about`);
    },
    textInfo() {
      return api(`contentful/text/about`);
    },
    leadersInfo() {
      return api(`contentful/leaders`);
    },
    valuesInfo() {
      return api(`contentful/values`);
    },
  },
});


