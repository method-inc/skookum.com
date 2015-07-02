/** @flow */

require('./styles.css');

import React from 'react';

class Footer extends React.Component {
  render(): ?ReactElement {
    return (
      <footer className="Footer">
        <div className="InnerMax">
          <p className="Footer-legal">Ⓒ 2015 Skookum. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
