/** @flow */

require('./styles.css');

import React from 'react';
import Input from 'Input';
import Button from 'Button';
import Label from 'Label';
import api from 'api';

var last = n => n[n.length - 1];
var pluck = (o, ...keys) =>
  keys.reduce((result, k) => ((result[k] = o[k]), result), {});

// TODO: handle required fields a bit better than current
class ContactForm extends React.Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {
      message: null, // ?string
      error: null, // ?{message: string, fields: Array<string>}

      firstname: '',
      email: '',
      company: '',
      phone: '',
      /* eslint-disable */
      how_can_we_help_you_: '',
      how_did_you_hear_about_us_: '',
      newsletter_subscription: false,
      /* eslint-enable */
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: mixed): void {
    event.preventDefault();
    var data = pluck(this.state, 'firstname', 'email', 'company', 'phone', 'how_can_we_help_you_', 'how_did_you_hear_about_us_', 'newsletter_subscription');
    var id = last(event.target.action.split('/'));
    // reading cookies are so awesome
    var crumbs = document.cookie.split(/=|;/);
    crumbs.some((crumb, index) => {
      if (crumb === 'hubspotutk') {
        data.hsCookie = crumbs[index + 1];
        return true;
      }
    });

    data.endpoint = 'https://forms.hubspot.com/uploads/form/v2/203695/' + id;

    api('contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      res => this.setState({message: 'We’ll be in touch!'}),
      error => this.setState({error: JSON.parse(error.message)})
    );
  }

  handleChange(event: mixed): void {
    var {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(): ReactElement {
    if (this.state.message) {
      return (
        <div className="ContactForm">
          <header className="ContactForm-header">Thanks for reaching out!</header>
          <Label type="success">{this.state.message}</Label>
        </div>
      );
    }

    return (
      <form
        className="ContactForm"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        id="hsForm_727a39d3-9444-4b64-906d-7cd954f48a51"
        action="https://forms.hubspot.com/uploads/form/v2/203695/727a39d3-9444-4b64-906d-7cd954f48a51"
        method="POST"
        noValidate={true}
        onSubmit={this.handleSubmit}>
        <header className="ContactForm-header">Submit an Inquiry</header>
        <hr className="ContactForm-divider" />
        {this.state.error && <Label type="error">{this.state.error.message}</Label>}
        <Input required onChange={this.handleChange} label="What’s your name? *" name="firstname" />
        <Input required onChange={this.handleChange} label="And how about your email? *" name="email" type="email" />
        <Input onChange={this.handleChange} label="Who do you work for?" name="company" />
        <Input onChange={this.handleChange} label="Phone numbers are optional" name="phone" type="phone"/>
        <Input required onChange={this.handleChange} element="textarea" label="Submit your message here *" name="how_can_we_help_you_" />
        <Input onChange={this.handleChange} label="How did you hear about us?" name="how_did_you_hear_about_us_" />
        <fieldset className="ContactForm-fieldset">
          <label className="ContactForm-label is-checkbox">
            <input onChange={this.handleChange} className="ContactForm-checkbox" type="checkbox" name="newsletter_subscription" />
            Sign me up to the Skookum Files
          </label>
        </fieldset>
        <Button type="primary">Send</Button>
      </form>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
