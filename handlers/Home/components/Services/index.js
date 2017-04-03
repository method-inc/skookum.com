/* @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';
import markdown from 'markdown';
import Capability from 'Capability';
import Button from 'Button';

class Services extends React.Component {
  render(): ReactElement {
    return (
      <div className="HomeServices">
        <p className="HomeServices-blurb">
          We’re a diverse team of <span className="HomeServices-type HomeServices-type--business">business</span>,
          <span className="HomeServices-type HomeServices-type--design"> design</span> and <span className="HomeServices-type HomeServices-type--technology">
          technology</span> professionals united by a common belief: In order to create real value, you must put
          people at the center of everything you do. It defines our culture, the way we work and the commitment we make to our clients.
        </p>
        <section className="HomeServices-capabilities">
          <h2 className="HomeServices-capabilitiesTitle">
            Our Capabilities
          </h2>
          <div className="HomeServices-capabilitiesWrapper">
            {
              ['Digital Strategy', 'Experience Design', 'Engineering'].map(type => (
                <Capability key={type} capability={type} />
              ))
            }
          </div>
          <Button className="HomeServices-link" to="capabilities">
            View our Capabilities
          </Button>
        </section>
      </div>
    );
  }
}

Services.propTypes = {};

Services.displayName = 'Services';

export default Services
