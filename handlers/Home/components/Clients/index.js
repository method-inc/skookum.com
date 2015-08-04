/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';

class Clients extends Component {
  render(): ?ReactElement {
    return (
      <div className="HomeClients">
        <div className="HomeClients-content">
          <div className="HomeClients-title">
            For Over a decade
          </div>
          <div className="HomeClients-description">
            we have produced mission critical technology for some of the largest brands and organizations on the planet.
          </div>
        </div>
        <div className="HomeClients-clients">
          {this.props.clients.items.map(n => (
            <div className="HomeClients-client" key={n.name}>
              <div className="HomeClients-context">
                Mobile streaming video backend for employee training
              </div>
              <div className="HomeClients-image-container">
                <img className="HomeClients-img" title={n.name} src={n.image[0].fields.file.url} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Clients.displayName = 'Clients';

Clients.propTypes = {
  clients: PropTypes.any.isRequired,
};

export default Resolver.createContainer(Clients, {
  resolve: {
    clients() {
      return api(`contentful?content_type=client&limit=8`);
    },
  },
});
