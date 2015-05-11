/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';

class NotFound extends React.Component {
  render(): ?ReactElement {
    return (
      <div>
        Welcome NotFound
        <RouteHandler />
      </div>
    );
  }
}

export default NotFound;

