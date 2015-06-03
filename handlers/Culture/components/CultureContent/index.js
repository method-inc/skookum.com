/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import MajorSectionElement from 'MajorSectionElement';
import api from 'api';

var {PropTypes} = React;

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

class CultureContent extends React.Component {
  render(): ?ReactElement {
    return (
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
        <div className={cn('people')}>
          <div className={cn('people-title')}>
            Our People
            <hr className={cn('people-hr')} />
          </div>
          <ul className={cn('people-list')}>
            {this.props.people.map((n, i) => (
              <li key={i} className={cn('person')}>
                <strong className={cn('person-name')}>{n.displayName}</strong>
                <span className={cn('person-title')}>{n.jobTitle}</span>
                <img className={cn('person-image')} src={n.photoUrl} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

CultureContent.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    })
  ),
};

CultureContent.displayName = 'CultureContent';

export default Resolver.createContainer(CultureContent, {
  resolve: {
    people() {
      var FIELDS = [
        'displayName',
        'jobTitle',
        'photoUrl',
      ];

      return api(`team?fields=${FIELDS.toString()}`);
    },
  },
});
