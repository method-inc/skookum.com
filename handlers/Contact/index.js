require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import ContactForm from 'ContactForm';
import NewsletterInfo from 'NewsletterInfo';
import Locations from 'Locations';

class Contact extends React.Component {
  render(): ReactElement {
    return (
      <div className="Contact">
        <Hero color="black" title="Contact Us" />
        <div className="Contact-flex">
          <ContactForm />
          <NewsletterInfo />
        </div>
        <Locations />
      </div>
    );
  }
}

Contact.propTypes = {};

Contact.displayName = 'Contact';

export default Contact;
