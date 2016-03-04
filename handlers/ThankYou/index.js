require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import {Link} from 'react-router';
import Logo from 'Logo';
import Button from 'Button';

class ThankYou extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="ThankYou">
        <Hero
          color="black"
          image="../public/images/thankyou-hero.png"
          isLanding={true} >
          <div className="Landing-hero">
            <div className="Landing-header">
              <Link to="home" className="Landing-link" style={{display: 'inline'}}><Logo style={{position: 'relative', top: '0', height: 40, width: 48}} color="#fff" /></Link>
            </div>
            <h1 className="ThankYou-title">
              Thank You!
            </h1>
            <h2 className="ThankYou-subtitle">
              We can't wait to hear more about your business.
            </h2>
          </div>
        </Hero>
        <div className="ThankYou-block ThankYou-block--small">
          <div className="ThankYou-block-content is-right">
            <div className="ThankYou-block-text">
              <div>Interested in learning</div>
              <div>more about our culture?</div>
              <div className="ThankYou-line"/>
            </div>
          </div>
        </div>
        <div className="ThankYou-block ThankYou-block--large">
          <div className="ThankYou-block-image" style={{backgroundImage: `url(../public/images/thankyou-work.png)`}}/>
          <div className="ThankYou-block-content is-left">
            <div className="ThankYou-block-pretitle">
              View our
            </div>
            <div className="ThankYou-block-title">
              Case Studies
            </div>
            <Button to="work" style={{border: 0}} className="ThankYou-link" type="primary">
              <img src="../../public/images/right-arrow-icon.svg"/>
            </Button>
          </div>
        </div>
        <div className="ThankYou-block ThankYou-block--small">
          <div className="ThankYou-block-image" style={{backgroundImage: `url(../public/images/thankyou-blog.png)`}}/>
          <div className="ThankYou-block-content is-left">
            <div className="ThankYou-block-pretitle">
              Read our
            </div>
            <div className="ThankYou-block-title">
              Blog
            </div>
            <Button to="blog" style={{border: 0}} className="ThankYou-link" type="primary">
              <img src="../../public/images/right-arrow-icon.svg"/>
            </Button>
          </div>
        </div>
        <div className="ThankYou-block ThankYou-block--small is-deskOnly">
          <div className="ThankYou-block-image" style={{backgroundImage: `url(../public/images/thankyou-capabilities.png)`}}/>
        </div>
        <div className="ThankYou-block ThankYou-block--small">
          <div className="ThankYou-block-image is-mobileOnly" style={{backgroundImage: `url(../public/images/thankyou-capabilities.png)`}}/>
          <div className="ThankYou-block-content is-left">
            <div className="ThankYou-block-pretitle">
              Learn More About Our
            </div>
            <div className="ThankYou-block-title">
              Capabilities
            </div>
            <Button to="capabilities" style={{border: 0}} className="ThankYou-link" type="primary">
              <img src="../../public/images/right-arrow-icon.svg"/>
            </Button>
          </div>
        </div>
        <footer className="ThankYou-footer"></footer>
      </div>
    );
  }
}

ThankYou.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

ThankYou.displayName = 'ThankYou';

export default Resolver.createContainer(ThankYou, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
