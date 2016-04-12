/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render(): ?ReactElement {
    return (
      <footer className="Footer">
        <div className="Footer-links">
          <Link to="careers" className="Footer-link">Careers</Link>
          <Link to="open-source" className="Footer-link">Open&nbsp;Source</Link>
          <a href="https://www.twitter.com/skookum" target="_blank" className="Footer-link">Twitter</a>
          <a href="https://www.linkedin.com/company/skookum-digital-works" target="_blank" className="Footer-link">Linkedin</a>
          <a href="https://www.facebook.com/SkookumInc" target="_blank" className="Footer-link">Facebook</a>
          <a href="https://instagram.com/skookumpeople" target="_blank" className="Footer-link">Instagram</a>
        </div>
        <p className="Footer-legal">Ⓒ 2016 Skookum. All Rights Reserved.</p>
      </footer>
    );
  }
}
export default Footer;
