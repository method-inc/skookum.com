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
var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

// TODO: handle required fields a bit better than current
class ContactForm extends React.Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {
      message: null, // ?string
      error: null, // ?{message: string, fields: Array<string>}

      firstname: '',
      email: '',
      /* eslint-disable */
      how_can_we_help_you_: '',
      newsletter_subscription: false,
      /* eslint-enable */
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: mixed): void {
    event.preventDefault();
    var data = pluck(this.state, 'firstname', 'email', 'how_can_we_help_you_', 'newsletter_subscription');

    if (!re.test(data.email)) {
      return this.setState({error: { message: 'Your email address appears invalid.' }});
    }

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
      res => this.setState({message: 'Thanks! We’ll be in touch!'}),
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
          <header className="ContactForm-header is-success">
            <img className="ContactForm-header-icon" src="/public/images/sent.svg" />
            {this.state.message}
          </header>
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
        {this.state.error && <Label style={{marginBottom: '1em'}} type="error">{this.state.error.message}</Label>}
        <Input required onChange={this.handleChange} value={this.state.firstname} label="What’s your name?" name="firstname" />
        <Input required onChange={this.handleChange} value={this.state.email} label="And how about your email?" name="email" type="email" />
        <Input required onChange={this.handleChange} value={this.state.how_can_we_help_you_} element="textarea" label="Submit your message here" name="how_can_we_help_you_" />
        <fieldset className="ContactForm-fieldset">
          <label className="ContactForm-label is-checkbox">
            <input onChange={this.handleChange} className="ContactForm-checkbox" type="checkbox" name="newsletter_subscription" />
            Sign me up to receive the Skookum Gazette
          </label>
        </fieldset>
        <Button className="ContactForm-submit" type="primary">Send</Button>
      </form>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
