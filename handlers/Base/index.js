/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import NavBar from 'NavBar';
import Footer from 'Footer';

class AppBase extends React.Component {
  render(): ?ReactElement {
    return (
      <div>
        <NavBar />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}

export default AppBase;

