/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';

class Clients extends Component {
  render(): ?ReactElement {
    return (
      <div className="HomeClients InnerMax">
        {this.props.clients.map(n => (
          <div className="HomeClients-client" key={n.name}>
            <img className="HomeClients-img" title={n.name} src={n.image[0].fields.file.url} />
          </div>
        ))}
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
