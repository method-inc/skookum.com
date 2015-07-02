/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Resolver} from 'react-resolver';
import MajorSectionElement from 'MajorSectionElement';
import api from 'api';
import WallOfFaces from 'WallOfFaces';
console.log('process.features.WALL_OF_FACES', process.features.WALL_OF_FACES);

var cn = s => `CultureContent-${s}`;

var BENEFITS = [
  '5 weeks paid vacation starting on day one',
  'Access to senior leadership',
  'Stocked kitchen including healthy snacks and delicious beer',
  'Awesome medical plan plus the ability to earn money from your deductible',
  'Gym membership reimbursement',
  'Professional masseuse occasionally in-office',
  'Regular company outings',
  'Free lunch every Friday',
  'Professional growth opportunities including internal working groups, our library, and 5 conference days annually',
  'Matching 401k',
  'Work/life balance',
  'And other things we’d rather surprise you with',
];

class CultureContent extends Component {
  render(): ReactElement {
    return (
      <div className="InnerMax">
        <div className="CultureContent">
          <MajorSectionElement
            title="In order to create real value you must put people at the center of everything"
            content="We never do the same thing twice. We build business critical applications. We tackle problems we don’t always know how to solve. Every day, every project is a new challenge to conquer. You will have the opportunity to push yourself and grow from offices in beautiful Charlotte, NC and Denver, CO. We believe in work/life balance and offer a ton of competitive perks." />
          <div className={cn('benefits')}>
            <img className={cn('benefits-image')} src="/public/images/culture-benefits.png" />
            <div className={cn('benefits-title')}>Benefits</div>
            <ul className={cn('benefits-list')}>
              {BENEFITS.map((n, i) => (
                <li key={i} className={cn('benefits-item')}>{n}</li>
              ))}
            </ul>
          </div>

          {process.features.WALL_OF_FACES && <WallOfFaces />}
        </div>
      </div>
    );
  }
}

export default CultureContent;

