/** @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';
import ServiceContact from '../Service/components/ServiceContact';

class InnovationCamp extends React.Component {
  render(): ReactElement {
    return (
      <div>

        <div className="Hero">
          <div className="Hero-content">
            <div className="Hero-title">Innovation Camp</div>
            <div className="Hero-subtitle">From concept to prototype in 5 days</div>
          </div>
        </div>

        <div className="Home-statement">Innovation camp is a one week program to help propel innovative ideas forward.</div>


        <div className="Service">
          <div className="Service-title">The Schedule</div>

          <div className="Service-highlights">

            <div className="Service-highlight">
              <div className="Service-highlight-image"></div>
              <div className="Service-highlight-container">
                <div className="Service-highlight-title">Day One: Research</div>
                <div className="Service-highlight-description">We explore the problem, market opportunity, business constraints and success criteria.</div>
              </div>
            </div>

            <div className="Service-highlight">
              <div className="Service-highlight-image"></div>
              <div className="Service-highlight-container">
                <div className="Service-highlight-title">Day Two: Sketch</div>
                <div className="Service-highlight-description">Design workshops surface a range of ideas and give context to potential solutions.</div>
              </div>
            </div>

            <div className="Service-highlight">
              <div className="Service-highlight-image"></div>
              <div className="Service-highlight-container">
                <div className="Service-highlight-title">Day Three: Prototype</div>
                <div className="Service-highlight-description">We mockup a component of the full solution to give you a sense of what is possible.</div>
              </div>
            </div>

            <div className="Service-highlight">
              <div className="Service-highlight-image"></div>
              <div className="Service-highlight-container">
                <div className="Service-highlight-title">Day Four: Test</div>
                <div className="Service-highlight-description">Stakeholders, customers and/or end-users give feedback on utility and ease-of-use.</div>
              </div>
            </div>

            <div className="Service-highlight">
              <div className="Service-highlight-image"></div>
              <div className="Service-highlight-container">
                <div className="Service-highlight-title">Day Five: Cheers</div>
                <div className="Service-highlight-description">We provide a recommendation for next steps and pass around the I Heart Camp koozies.</div>
              </div>
            </div>

          </div>

          <div className="Service-footer Service-footer--noHeader">
            <ServiceContact className="ServiceContact" />
          </div>
        </div>

      </div>
    );
  }
}

InnovationCamp.propTypes = {};

InnovationCamp.displayName = 'InnovationCamp';

export default Resolver.createContainer(InnovationCamp, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/innovation-camp`);
    },
  },
});
