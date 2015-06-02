/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import MajorSectionElement from 'MajorSectionElement';
import api from 'api';

var {PropTypes} = React;

class CareersContent extends React.Component {
  render(): ?ReactElement {
    console.log(this.props.careers);
    return (
      <div className="CareersContent">
        <MajorSectionElement
          title="In order to create real value you must put people at the center of everything"
          content="We never do the same thing twice. We build business critical applications. We tackle problems we don’t always know how to solve. Every day, every project is a new challenge to conquer. You will have the opportunity to push yourself and grow from offices in beautiful Charlotte, NC and Denver, CO. We believe in work/life balance and offer a ton of competitive perks." />
          <ul className="CareersContent-list">
            {this.props.careers.length === 0 ?
              <li className="CareersContent-item">
                <div className="CareersContent-item-segment">
                  <div className="CareersContent-eventName">There are no positions available at this time.</div>
                </div>
              </li> :
              <li className="CareersContent-item">
                <div className="CareersContent-item-segment">
                  <div className="CareersContent-eventName">
                    There are no positions available at this time.
                    <hr />
                  </div>
                </div>
              </li>
            }
          </ul>
      </div>
    );
  }
}

CareersContent.propTypes = {
  /*
  careers: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    })
  ),
 */
};

CareersContent.displayName = 'CareersContent';

export default Resolver.createContainer(CareersContent, {
  resolve: {
    careers() {
      return api(`careers`);
    },
  },
});
