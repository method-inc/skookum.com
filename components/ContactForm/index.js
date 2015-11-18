/** @flow */

require('./styles.css');

import React, {PropTypes} from 'react';
import Input from 'Input';
import Button from 'Button';
import Label from 'Label';
import {AoProcessForm} from 'actOn';

var last = n => n[n.length - 1];
var pluck = (o, ...keys) =>
  keys.reduce((result, k) => ((result[k] = o[k]), result), {});
var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

// TODO: handle required fields a bit better than current'
class ContactForm extends React.Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {
      message: null, // ?string
      error: null, // ?{message: string, fields: Array<string>}
      email: '',
      showThankYou: false,
      /* eslint-disable */
      first_name: '',
      last_name: '',
      phone: '',
      how_can_we_help: '',
      additional_information: '',
      newsletter_subscription: false,
      /* eslint-enable */
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMissingFields = this.getMissingFields.bind(this);
    this.renderLandingPageForm = this.renderLandingPageForm.bind(this);
  }

  handleChange(event: mixed): void {
    var {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    var missingFields = this.getMissingFields();


    if (this.state.showThankYou) {
      return;
    }

    if (missingFields.length > 0) {
      this.setState({error: {message: 'Oops. It looks like you’re missing some required fields.', fields: missingFields}});
      return;
    }

    if (!re.test(this.state.email)) {
      this.setState({error: { message: 'Your email address appears invalid.' }});
      return;
    }

    var aoCAP = {
      aid: '17086',
      fid: '0003',
      did: 'd-0001',
      server: 'gettoknow.skookum.com',
      formId: 'form_0003',
    };

    if (this.props.isLandingPage) {
      aoCAP.fid = '0007';
      aoCAP.formId = 'form_0007';
    }

    AoProcessForm(event.target, aoCAP);

    if (this.props.isLandingPage) {
      this.context.router.transitionTo('thankyou');
    } else {
      this.setState({showThankYou: true, error: null});
    }
  }

  getMissingFields() {
    var requiredFields = [];
    if (!this.props.isLandingPage) {
      requiredFields = [
        'first_name', 'last_name', 'email',
      ];
    } else {
      requiredFields = [
        'name', 'email',
      ];
    }

    var missingFields = requiredFields.reduce(
      (missing, n) =>
        (typeof this.state[n] === 'undefined' || this.state[n] === '') ? missing.concat(n) : missing,
    []);
    return missingFields;
  }

  renderLandingPageForm(labelStyle) {
    return (
      <form
        className="ContactForm"
        id="form_0007"
        noValidate={true}
        style={this.props.formStyle}
        onSubmit={this.handleSubmit}>
        <header className="ContactForm-header">{this.props.header}</header>
        {this.state.error && <Label style={{marginBottom: '1em'}} type="error">{this.state.error.message}</Label>}
        <div className="ContactForm-field">
          <Input labelStyle={labelStyle} required onChange={this.handleChange} value={this.state.first_name} label="First Name*" name="first_name" />
        </div>
        <div className="ContactForm-field">
          <Input labelStyle={labelStyle} required onChange={this.handleChange} value={this.state.last_name} label="Last Name*" name="last_name" />
        </div>
        <div className="ContactForm-field is-landing">
          <Input labelStyle={labelStyle} required onChange={this.handleChange} value={this.state.email} label="Email*" name="email" type="email" />
        </div>
        <input type="hidden" value={this.props.campaign} name="campaign"/>
        <input type="hidden" value={this.props.campaign} name="utm_source"/>
        <input type="hidden" value={this.props.campaign} name="utm_medium"/>
        <input type="hidden" value={this.props.campaign} name="utm_term"/>
        <input type="hidden" value={this.props.campaign} name="utm_content"/>
        <input type="hidden" value={this.props.campaign} name="utm_campaign"/>
        <label style={labelStyle} className="ContactForm-label is-textarea is-landing">Additional Information to Help Us Prepare</label>
        <textarea className="ContactForm-textarea is-landing" onChange={this.handleChange} value={this.state.additional_information} name="additional_information"></textarea>
        <div>
          <Button style={{border: 0}} className="ContactForm-submit is-landing" type="primary">Request Consultation</Button>
        </div>
      </form>
    );
  }

  render(): ReactElement {

    if (this.state.message) {
      return (
        <div className="ContactForm">
          <header className="ContactForm-header is-success">
            <img className="ContactForm-header-icon" src="/public/images/sent.svg" alt="thank you" />
            {this.state.message}
          </header>
        </div>
      );
    }

    var labelStyle = {color: this.props.labelColor};

    if (this.props.isLandingPage) {
      return this.renderLandingPageForm(labelStyle);
    }

    return (
      <form
        className="ContactForm"
        id="form_0003"
        noValidate={true}
        style={this.props.formStyle}
        onSubmit={this.handleSubmit}>
        <header className="ContactForm-header">{this.props.header}</header>
        {this.state.error && <Label style={{marginBottom: '1em'}} type="error">{this.state.error.message}</Label>}
        <div className="ContactForm-field">
          <Input labelStyle={labelStyle} required onChange={this.handleChange} value={this.state.first_name} label="First Name*" name="first_name" />
        </div>
        <div className="ContactForm-field">
          <Input labelStyle={labelStyle} required onChange={this.handleChange} value={this.state.last_name} label="Last Name*" name="last_name" />
        </div>
        <div className="ContactForm-field">
          <Input labelStyle={labelStyle} required onChange={this.handleChange} value={this.state.email} label="Email*" name="email" type="email" />
        </div>
        <div className="ContactForm-field">
          <Input labelStyle={labelStyle} required onChange={this.handleChange} value={this.state.phone} label="Phone" name="phone" type="tel" />
        </div>
        <label style={labelStyle} className="ContactForm-label is-textarea">How can we help you?</label>
        <textarea className="ContactForm-textarea" onChange={this.handleChange} value={this.state.how_can_we_help} name="how_can_we_help"></textarea>
        <fieldset className="ContactForm-fieldset">
          <label style={labelStyle} className="ContactForm-label is-checkbox">
            <input onChange={this.handleChange} value="1" className="ContactForm-checkbox" type="checkbox" name="newsletter_subscription" />
            Sign me up to receive the newsletter
          </label>
        </fieldset>
        <Button style={{border: 0}} className="ContactForm-submit" type="primary">Send</Button>
        {this.state.showThankYou && <span className="ContactForm-thanks">Thanks, we'll be in touch!</span>}
      </form>
    );
  }
}

ContactForm.contextTypes = {
  router: PropTypes.func.isRequired,
};

ContactForm.propTypes = {};

export default ContactForm;
