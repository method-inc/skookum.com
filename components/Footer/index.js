/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render(): ?ReactElement {
    return (
      <footer className="Footer">
        <p className="Footer-legal">Ⓒ 2015 Skookum. All Rights Reserved.</p>
      </footer>
    );
  }
}
export default Footer;
