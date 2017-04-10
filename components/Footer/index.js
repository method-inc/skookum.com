/** @flow */

require('./styles.css');

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render(): ?ReactElement {

    const getYear = new Date().getFullYear();

    return (
      <footer className="Footer">
        <div className="Footer-inner">
          <h3 className="Footer-subtitle">
            About Skookum
          </h3>
          <div className="Footer-content">
            <p className="Footer-description">
              We are a diverse team of engineers, designers, and strategists
              passionate about solving complex business problems.
            </p>
            <div className="Footer-links">
              <Link to="careers" className="Footer-link">Careers</Link>
              <Link to="news" className="Footer-link">News</Link>
              <Link to="open-source" className="Footer-link">Open&nbsp;Source</Link>
              <a href="https://www.twitter.com/skookum" target="_blank" className="Footer-link">Twitter</a>
              <a href="https://www.linkedin.com/company/skookum-digital-works" target="_blank" className="Footer-link">Linkedin</a>
              <a href="https://www.facebook.com/SkookumInc" target="_blank" className="Footer-link">Facebook</a>
              <a href="https://instagram.com/skookumpeople" target="_blank" className="Footer-link">Instagram</a>
              <a href="https://dribbble.com/skookum" target="_blank" className="Footer-link">Dribbble</a>
            </div>
          </div>
          <p className="Footer-legal">Ⓒ {getYear} Skookum, INC. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

Footer.contextTypes = {
  router: PropTypes.func.isRequired,
};

export default Footer;
