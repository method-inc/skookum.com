/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';
var {PropTypes} = React;

class Clients extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="HomeClients">
        {this.props.clients.map(n => (
          <div className="HomeClients-client">
            <img className="HomeClients-img" title={n.name} src={n.image.fields.file.url} />
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
