/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import NavBar from 'NavBar';

class AppBase extends React.Component {
  render(): ?ReactElement {
    return (
      <div>
        <NavBar />
        <RouteHandler />
      </div>
    );
  }
}

export default AppBase;

