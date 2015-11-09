require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import ContactForm from 'ContactForm';
import NewsletterInfo from 'NewsletterInfo';
import Locations from 'Locations';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';

class Contact extends React.Component {
  render(): ReactElement {
    var heroInfo = this.props.heroInfo[0];

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
      <div className="Contact">
        <Hero color="black" 
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title} 
          subtitle={lookup(heroInfo, 'subtitle')}
          metaTags={metaTags} />
        <div className="Contact-flex">
          <ContactForm header="Say Hello" labelColor="#393939"/>
        </div>
        <Locations />
      </div>
    );
  }
}

Contact.propTypes = {};

Contact.displayName = 'Contact';

export default Resolver.createContainer(Contact, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/contact`);
    },
  },
});
