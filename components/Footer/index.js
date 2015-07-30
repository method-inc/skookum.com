/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render(): ?ReactElement {
    return (
      <footer className="Footer">
        <div className="Footer-links">
          <Link to="blog" className="Footer-link">Blog</Link>
          <Link to="careers" className="Footer-link">Careers</Link>
          <Link to="open-source" className="Footer-link">Open Source</Link>
          <a href="https://www.twitter.com/skookum" className="Footer-link">Twitter</a>
          <a href="https://www.linkedin.com/company/skookum-digital-works" className="Footer-link">Linkedin</a>
          <a href="https://www.facebook.com/SkookumDigitalWorks" className="Footer-link">Facebook</a>
        </div>
        <div className="Footer-brag">We've got this software thing on lock</div>
        <p className="Footer-legal">Ⓒ 2015 Skookum. All Rights Reserved.</p>
      </footer>
    );
  }
}
export default Footer;
