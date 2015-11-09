require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';

class Landing extends React.Component {


  renderHeroContent
  render(): ?ReactElement {
    return (
      <div className="Landing">
        <section className="Landing-container Landing-container--fixed">
          <div className="Landing-description">
            Whether you’re looking to build your own cloud, or leverage existing providers like AWS and Azure, we can customize a cloud strategy to meet your specific business needs. From strategic planning to implementation and support, we offer a complete range of services to help complement in-house capabilities and accelerage cloud adoption. 
          </div>
          <div className="Landing-icons">
            <div className="Landing-icon-container">
              <img className="Landing-icon" src="../../public/images/blogimg_all.png" />
              <span className="Landing-icon-title">test</span>
            </div>
          </div>
        </section>

        <section className="Landing-container">
          <div className="Landing-layer">
            <ul className="Landing-stats">
              <li className="Landing-stat">
                <div className="Landing-stat-number">10</div>
                <div className="Landing-stat-text">years in business</div>
              </li>
              <li className="Landing-stat">
                <div className="Landing-stat-number">10</div>
                <div className="Landing-stat-text">years in business</div>
              </li>
              <li className="Landing-stat">
                <div className="Landing-stat-number">10</div>
                <div className="Landing-stat-text">years in business</div>
              </li>
            </ul>
            <div className="Landing-layer-content">
            </div>
          </div>
          <div className="Landing-layer">
            <div className="Landing-layer-content">
              <div className="Landing-layer-title">
                Why Skookum
              </div>
              <div className="Landing-layer-description">
                The age of the customer is changing everything about the way companies go to market. As a long time partner for progressive CIOs and IT leaders, we have successfully delivered custom cloud solutions to help companies evolve in the new digital economy.
              </div>
            </div>
            <ul className="Landing-stats">
              <li className="Landing-stat">
                <div className="Landing-stat-number">10</div>
                <div className="Landing-stat-text">years in business</div>
              </li>
              <li className="Landing-stat">
                <div className="Landing-stat-number">10</div>
                <div className="Landing-stat-text">years in business</div>
              </li>
              <li className="Landing-stat">
                <div className="Landing-stat-number">10</div>
                <div className="Landing-stat-text">years in business</div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

Landing.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Landing.displayName = 'Landing';

export default Resolver.createContainer(Landing, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
