/** @flow */

require('./styles.css');

import React from 'react';
import Button from 'Button';
var {PropTypes} = React;

class ContactForm extends React.Component {
  render(): ?ReactElement {
    return (
      <form className="ContactForm">
        <header className="ContactForm-header">Submit an Inquiry</header>
        <hr className="ContactForm-divider" />
        <fieldset className="ContactForm-fieldset">
          <label className="ContactForm-label">What’s your name? *</label>
          <input className="ContactForm-input" name="name" />
        </fieldset>
        <fieldset className="ContactForm-fieldset">
          <label className="ContactForm-label">And how about your email? *</label>
          <input className="ContactForm-input" />
        </fieldset>
        <fieldset className="ContactForm-fieldset">
          <label className="ContactForm-label">Submit your message here *</label>
          <textarea className="ContactForm-textarea" name="message" />
        </fieldset>
        <fieldset className="ContactForm-fieldset">
          <label className="ContactForm-label">The “I’m-not-a-robot” test</label>
          <input className="ContactForm-input" name="message" />
        </fieldset>
        <fieldset className="ContactForm-fieldset">
          <label className="ContactForm-label is-checkbox">
            <input className="ContactForm-checkbox" type="checkbox" name="message" />
            Sign me up to receive the Skookum Gazette
          </label>
        </fieldset>
        <Button type="primary">Send</Button>
      </form>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
