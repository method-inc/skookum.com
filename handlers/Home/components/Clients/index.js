/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
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
      return fetch(
        `http://localhost:${process.env.PORT}/api/contentful?content_type=client&limit=8`
      ).then(n => n.json());
    },
  },
});
