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
      email: '',
      showThankYou: false,
      /* eslint-disable */
      first_name: '',
      last_name: '',
      how_can_we_help: '',
      newsletter_subscription: false,
      /* eslint-enable */
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.AoProcessForm = this.AoProcessForm.bind(this);
    this.getMissingFields = this.getMissingFields.bind(this);
  }

  handleChange(event: mixed): void {
    var {name, value} = event.target;
    this.setState({[name]: value});
  }

  AoProcessForm(formelement) {
    //from ActOn - form submission script
    /* eslint-disable */
    var aoProtocol = location.protocol;
    if ( aoProtocol.indexOf('http') < 0 ) aoProtocol = 'http:';
    var aoCAP = {
      aid: '17086',
      fid: '0003',
      did: 'd-0001',
      server: 'gettoknow.skookum.com',
      formId: 'form_0003',
      protocol: aoProtocol,
    };

    var aoArr = aoArr || []; aoArr.push(aoCAP);

    for (var AoI = 0; AoI < aoArr.length; AoI++) {
      if ( aoArr[AoI].aid && aoArr[AoI].fid && aoArr[AoI].did && aoArr[AoI].server && ( aoArr[AoI].formId || aoArr[AoI].formName )) {
        var d = document,
        thisFormId = formelement.id || '',
        thisFormName = formelement.name || '',
        bi = function(i) {
          return d.getElementByIdd(i);
        },
        bn = function(i) {
          return d.getElementsByName(i)[0];
        },
        names = [],
        values = [],
        params = {},
        w = window,
        targetIdOrName = aoArr[AoI].formName ? bn(aoArr[AoI].formName) : bi(aoArr[AoI].formId),
        len = targetIdOrName.elements.length,
        isLoaded = false,
        ud = 'undefined',
        st = function(f, i) {
          w.setTimeout(f, i);
        },
        ce = function(t) {
          return d.createElement(t)
        },
        gid = function(p) {
          var j, i = 0,
          n = Math.random,
          r = [],
          c = '0123456789abcdef'.split('');
          for (; i < 16; i++) r[i] = c[(0 | n() * 16) & 0xf];
          j = p + r.join('');
          return bi(j) == null ? j : gid(p);
        },
        addInput = function( form, name, value )
        {
          var el = ce('input');
          el.name = name;
          el.value = value;
          form.appendChild( el );
        },
        idifr = gid('aoCapT');

        if (aoArr[AoI].formName == thisFormName || aoArr[AoI].formId == thisFormId) {
          var dTarget = ce('div');
          dTarget.style.display = 'none';
          d.body.appendChild(dTarget);
          dTarget.innerHTML = '<iframe name="' + idifr + '" id="' + idifr + '"><\/iframe>'; // generate iframe

          var dForm = ce('form'), idform = gid('aoCapD');
          dForm.id = idform;
          dForm.style.display = "none";
          dForm.method = 'POST';
          dForm.enctype = 'multipart/form-data';
          dForm.acceptCharset = 'UTF-8';
          dForm.target = idifr; // form targets iframe
          dForm.action = (aoCAP.protocol || w.location.protocol) + '//' + aoCAP.server + '/acton/forms/userSubmit.jsp';
          d.body.appendChild(dForm); // generate form 

          for (var z = 0; z < len; z++) {
            var el = targetIdOrName.elements[z];
            var name = typeof(el.name) != ud ? el.name : null;
            var value = typeof(el.value) != ud ? el.value : null;
            var tagName = el.nodeName.toLowerCase();
            if (tagName == 'input' && (el.type == 'radio' || el.type == 'checkbox') && !el.checked) {
              value = 0;
            } else if (tagName == 'select' && el.selectedIndex && el.selectedIndex != -1 && el.options[el.selectedIndex] && el.options[el.selectedIndex].value) 
            {
              value = el.options[el.selectedIndex].value
            };
            if (name != null && name != '') {
              names.push(name);
              values.push(value);
              //console.log("Element name: " + el.name + " / Element value: " + value);
              params[name] = value;
            };
            addInput( dForm, el.name, value );
          }

          aoCAP.pid = 0;
          aoCAP.cuid = aoCAP.cuid || '';
          aoCAP.srcid = aoCAP.srcid || '';
          aoCAP.camp = aoCAP.camp || '';
          addInput( dForm, 'ao_a', aoArr[AoI].aid );
          addInput( dForm, 'ao_f', aoArr[AoI].fid );
          addInput( dForm, 'ao_d', aoArr[AoI].fid+":"+aoArr[AoI].did );
          addInput( dForm, 'ao_p', 0 );
          addInput( dForm, 'ao_jstzo', new Date().getTimezoneOffset() );
          addInput( dForm, 'ao_form_neg_cap', '' );
          addInput( dForm, 'ao_refurl', d.referrer );
          addInput( dForm, 'ao_cuid', aoCAP.cuid );
          addInput( dForm, 'ao_srcid', aoCAP.srcid );
          addInput( dForm, 'ao_camp', aoCAP.camp );
          bi(idform).submit();

          var dTargetFrame = bi( idifr );
            dTargetFrame.onload = function() { 
            isLoaded = true; 
          }; 
          var waitForSubmit = function()
          {
            this.count = "";
            if ( ! ( isLoaded || dTargetFrame.readyState == "complete" ) ) {
              st( waitForSubmit, 200 );
              this.count ++;
            } else if (this.count > 7) {
              return true;
              console.log("skipping dForm");
            }
          else {
            d.body.removeChild( dForm );
            d.body.removeChild( dTarget );
          }
        };

        st( waitForSubmit, 100 );

        }
      } else {
        console.log('aoCAP property missing');
        } 
      }
      /* eslint-enable */
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

    this.AoProcessForm(event.target);
    this.setState({showThankYou: true, error: null});
  }

  getMissingFields() {
    const REQUIRED_FIELDS = [
      'first_name', 'last_name', 'email',
    ];

    var missingFields = REQUIRED_FIELDS.reduce(
      (missing, n) =>
        (typeof this.state[n] === 'undefined' || this.state[n] === '') ? missing.concat(n) : missing,
    []);
    return missingFields;
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


    var labelStyle = {color: this.props.labelColor};

    return (
      <form
        className="ContactForm"
        id="form_0003"
        noValidate={true}
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

ContactForm.propTypes = {};

export default ContactForm;
