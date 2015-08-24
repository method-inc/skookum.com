/* @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';


class Services extends React.Component {
  render(): ReactElement {
    var services = this.props.services;
    return (
      <div className="HomeServices">
        <ul className="HomeServices-list">
          {services.items.map((s, imageUrl) => (
            (imageUrl = lookup(s.image, 'fields.file.url') || '/public/images/blogimg_all.png'),
            <li ref={s[1]} 
                style={{backgroundImage: `url(${imageUrl})`}}
                className="HomeServices-item" key={s.name}>
              <div className="HomeServices-overlay"></div>
              <div className="HomeServices-content">
                <div className="HomeServices-title">{s.name}</div>
                <span className="HomeServices-description">{s.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Services.propTypes = {};

Services.displayName = 'Services';

export default Resolver.createContainer(Services, {
  resolve: {
    services() {
      return api(`contentful?content_type=service&limit=6`);
    },
  },
});