/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import Button from 'Button';

class ContactSection extends Component {
  render(): ?ReactElement {

    return (
      <div className="ContactSection">
        <div className="ContactSection-inner">
          <div className="ContactSection-textContainer">
            <h2 className="ContactSection-title">
              Ready to get started?
            </h2>
            <p className="ContactSection-blurb">
              Contact us to discuss your digital business objectives.
            </p>
          </div>
          <div className="ContactSection-ctaContainer">
            <Button className="ContactSection-link" to="contact">
              Start the Conversation
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

ContactSection.displayName = 'ContactSection';

export default ContactSection;