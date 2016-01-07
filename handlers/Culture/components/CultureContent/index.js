/** @flow */

require('./styles.css');

import React, {Component} from 'react';
import WallOfFaces from 'WallOfFaces';
// console.log('process.features.WALL_OF_FACES', process.features.WALL_OF_FACES);

var cn = s => `CultureContent-${s}`;

var BENEFITS = [
  'Open PTO policy, take the time you need',
  'Access to senior leadership',
  'Stocked kitchen including healthy snacks and delicious beer',
  'Awesome medical plan plus the ability to earn money from your deductible',
  'Gym membership reimbursement',
  'Professional masseuse occasionally in-office',
  'Regular company outings',
  'Free lunch every Friday',
  'Professional growth opportunities',
  'Matching 401k',
  'Work/life balance',
  'And other things we’d rather surprise you with',
];

class CultureContent extends Component {
  render(): ReactElement {
    return (
      <div className="CultureContent">
        <div className={cn('culture')}>
          <div className={cn('culture-image')} style={{backgroundImage: 'url(/public/images/careers1.jpg)'}}>
          </div>
          <div className={cn('culture-statement')}>
            <span style={{color: '#FAAB18', fontSize: '64px', marginRight: '-7px'}}>W</span>e build business critical applications. We tackle problems we don’t always know how to solve. You will have the opportunity to push yourself and grow from offices in beautiful Charlotte, NC and Denver, CO. We believe in work/life balance and offer a ton of competive perks.
          </div>
        </div>
        <div className={cn('benefits')}>
          <div className={cn('benefits-image')} style={{backgroundImage: 'url(/public/images/careers2.jpg)'}} />
          <div className={cn('benefits-overlay')}/>
          <h2 className={cn('benefits-title')}>Benefits</h2>
          <ul className={cn('benefits-list')}>
            {BENEFITS.map((n, i) => (
              <li key={i} className={cn('benefits-item')}>{n}</li>
            ))}
          </ul>
        </div>

        {process.features.WALL_OF_FACES && <WallOfFaces />}
      </div>
    );
  }
}

export default CultureContent;

