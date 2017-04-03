/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';

class Clients extends Component {
  render(): ?ReactElement {

    return (
      <div className="HomeClients">
        <p className="HomeClients-blurb">
          For more than a decade, we have helped over 350 clients transition to digital.
        </p>
        <div className="HomeClients-clients">
          {this.props.clients.items.map(n => (
            <div key={n.name} className="HomeClients-imgWrapper">
              <img className="HomeClients-img" title={n.name} src={n.image[0].fields.file.url} alt={n.image[0].fields.title}/>
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
    }
  },
});
