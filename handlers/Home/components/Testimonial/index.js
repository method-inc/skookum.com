/** @flow */

require('./styles.css');

import React, {Component} from 'react';

class Testimonial extends Component {
  render(): ?ReactElement {

    return (
      <div className="Testimonial">
        <div className="Testimonial-inner">
          <q className="Testimonial-quote">
            Skookum’s approach to product design and development is all encompassing, powerful, and helped
            us find the right market fit from the start.
          </q>
          <cite className="Testimonial-citation">
            Lisa May, Synchrony Financial
          </cite>
        </div>
      </div>
    );
  }
}

Testimonial.displayName = 'Testimonial';

export default Testimonial;
