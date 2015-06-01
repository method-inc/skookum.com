/** @flow */

require('./styles.css');

import React from 'react';
import Input from 'Input';
import Button from 'Button';

class ContactForm extends React.Component {
  render(): ?ReactElement {
    return (
      <form className="ContactForm">
        <header className="ContactForm-header">Submit an Inquiry</header>
        <hr className="ContactForm-divider" />
        <Input label="What’s your name? *" name="name" />
        <Input label="And how about your email? *" name="email" />
        <Input element="textarea" label="Submit your message here *" name="message" />
        <Input label="The “I’m-not-a-robot” test *" name="humanity" />
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
