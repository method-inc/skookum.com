require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import ContactForm from 'ContactForm';
import GazetteInfo from 'GazetteInfo';

class Contact extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Contact">
        <Hero color="#000" title="Contact Us" />
        <div className="Contact-flex">
          <ContactForm />
          <GazetteInfo />
        </div>
        <section></section>
      </div>
    );
  }
}

Contact.propTypes = {};

Contact.displayName = 'Contact';

export default Contact;

