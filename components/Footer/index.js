/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {

  constructor(props){
    super(props);
    this.state = {msg: '', email: '', success: ''}
  }

  onSubmit(e){
    e.preventDefault();
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!reg.test(this.state.email)){
      this.setState({msg: "Please enter a valid email address."})
    } else{
      fetch('http://gettoknow.skookum.com/acton/eform/17086/0005/d-ext-0001', {
        method: 'post'
      }).then(function(response) {
        console.log(response)
      }).catch(function(err) {
        console.log(err)
      });
      this.setState({success: "Thanks for signing up!", email: '', msg: ''})
    }
  }

  handleChange(e){
    this.setState({email: e.target.value});
  }

  render(): ?ReactElement {

    const getYear = new Date().getFullYear();

    return (
      <div>
        <div className="PreFooter">
          <div className="GetInTouch"><a href="http://skookum.com/contact">Get in touch »</a></div>
            <div className="StayInformed">
              <div className="s1">
                <p className="title">
                  Stay informed
                </p>
                <p className="subtitle">
                  An occasional email to keep you  in the loop on news and events
                </p>
              </div>
              <div className="s2">
                <form onSubmit={this.onSubmit.bind(this)}>
                  {this.state.success ? this.state.success :
                    <span>
                      <input type="text" placeholder="Enter your email address..." value={this.state.email} onChange={this.handleChange.bind(this)}/>
                      <input type="submit" value="SUBMIT" /><br/>
                    </span>
                  }
                  {this.state.msg ? this.state.msg : ''}
                </form>
              </div>
              <div className="s3"></div>
            </div>
        </div>
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
export default Footer;
