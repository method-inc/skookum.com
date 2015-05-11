/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render(): ?ReactElement {
    return (
      <footer className="Footer">
        <Link className="Footer-link" to="careers">Careers</Link>
        <Link className="Footer-link" to="open-source">Open Source</Link>
        <hr className="Footer-hr" />
        <Link className="Footer-link" to="events">Events</Link>
        <a className="Footer-link" href="https://www.twitter.com/skookum">Twitter</a>
        <a className="Footer-link" href="https://www.linkedin.com">LinkedIn</a>
        <a className="Footer-link" href="https://www.github.com/skookum">GitHub</a>
        <a className="Footer-link" href="#">Newsletter</a>

        <img className="Footer-logo" src="/public/images/logo.svg" />
        <p className="Footer-legal">Ⓒ 2015 Skookum. All Rights Reserved.</p>
      </footer>
    );
  }
}
export default Footer;
