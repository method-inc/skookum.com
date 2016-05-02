/** @flow */

require('./styles.css');

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {AoProcessForm} from 'actOn';

class Footer extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {msg: '', email: '', success: ''};
  }

  onSubmit(e){
    e.preventDefault();
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

    if (!reg.test(this.state.email)){
      this.setState({msg: 'Please enter a valid email address.'});
      return;
    }

    var aoCAP = {
      aid: '17086',
      fid: '0005',
      did: 'd-0001',
      server: 'gettoknow.skookum.com',
      formId: 'form_0005',
    };

    AoProcessForm(e.target, aoCAP);

    this.setState({success: 'Thanks for signing up!', email: '', msg: ''});
  }

  handleChange(e){
    this.setState({email: e.target.value});
  }

  render(): ?ReactElement {

    const getYear = new Date().getFullYear();

    if (this.context.router.getCurrentPathname() === '/contact'){
      return (
        <div>
          <footer className="Footer">
            <div className="Footer-links">
              <Link to="careers" className="Footer-link">Careers</Link>
              <Link to="open-source" className="Footer-link">Open&nbsp;Source</Link>
              <a href="https://www.twitter.com/skookum" target="_blank" className="Footer-link">Twitter</a>
              <a href="https://www.linkedin.com/company/skookum-digital-works" target="_blank" className="Footer-link">Linkedin</a>
              <a href="https://www.facebook.com/SkookumInc" target="_blank" className="Footer-link">Facebook</a>
              <a href="https://instagram.com/skookumpeople" target="_blank" className="Footer-link">Instagram</a>
            </div>
            <p className="Footer-legal">Ⓒ {getYear} Skookum. All Rights Reserved.</p>
          </footer>
        </div>
      );
    }

    return (
      <div>
        {this.context.router.getCurrentPathname() === '/contact' ? '' :
        <div className="PreFooter">
          <div className="PreFooter-GetInTouch"><Link to="contact">Get in touch</Link></div>
            <div className="PreFooter-StayInformed">
              <div className="PreFooter-s1">
                <p className="PreFooter-title">
                  Stay informed
                </p>
                <p className="PreFooter-subtitle">
                  An occasional email to keep you  in the loop on news and events
                </p>
              </div>

              <div className="PreFooter-s2">
                <form id="form_0005" onSubmit={this.onSubmit.bind(this)}>
                  {this.state.success ? this.state.success :
                    <span>
                      <input className="PreFooter-input" name="email" type="text" placeholder="Enter your email address..." value={this.state.email} onChange={this.handleChange.bind(this)}/>
                      <input className="PreFooter-submit" type="submit" value="SUBMIT" /><br/>
                    </span>
                  }
                  {this.state.msg ? this.state.msg : ''}
                </form>
              </div>
            </div>
        </div>}
        <footer className="Footer">
          <div className="Footer-links">
            <Link to="careers" className="Footer-link">Careers</Link>
            <Link to="open-source" className="Footer-link">Open&nbsp;Source</Link>
            <a href="https://www.twitter.com/skookum" target="_blank" className="Footer-link">Twitter</a>
            <a href="https://www.linkedin.com/company/skookum-digital-works" target="_blank" className="Footer-link">Linkedin</a>
            <a href="https://www.facebook.com/SkookumInc" target="_blank" className="Footer-link">Facebook</a>
            <a href="https://instagram.com/skookumpeople" target="_blank" className="Footer-link">Instagram</a>
          </div>
          <p className="Footer-legal">Ⓒ {getYear} Skookum. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

Footer.contextTypes = {
  router: PropTypes.func.isRequired,
};

export default Footer;
