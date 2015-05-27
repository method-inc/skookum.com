/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import MajorSectionElement from 'MajorSectionElement';
import ImagePopover from 'ImagePopover';
import api from 'api';

var {PropTypes} = React;

var cn = s => `CareersContent-${s}`;
var VALUES = [
  'Think big',
  'Choose to be happy',
  'Simplify & go',
  'Deliver amazing experiences',
  'Embrace change',
  'Teach & challenge',
  'Own it',
  'Be a team of A-players',
  'Thirst for growth',
];

var BENEFITS = [
  '5 weeks paid vacation starting on day one',
  'Access to senior leadership',
  'Stocked kitchen including healthy snacks and delicious beer',
  'Awesome medical plan plus the ability to earn money from your deductible',
  'Gym membership reimbursement',
  'Professional masseuse occassionally in-office',
  'Regular company outings',
  'Free lunch every Friday',
  'Professional growth opportunities including internal working groups, our library, and 5 conference days annually',
  'Matching 401k',
  'Work/life balance',
  'And other things we’d rather surprise you with',
];

var lastTimeoutId = null;

class CareersContent extends React.Component {
  constructor() {
      super();
      this.state = { activePersonIndex: -1 };
  }

  updateSelectedPopover(i) {
    var _i = this.state.activePersonIndex === i ? -1 : i;
    lastTimeoutId && clearTimeout(lastTimeoutId);
    lastTimeoutId = null;
    this.setState({ activePersonIndex: _i });
  }

  updatePopoverExpiration() {
    lastTimeoutId && clearTimeout(lastTimeoutId);
    lastTimeoutId = setTimeout(() => { this.updateSelectedPopover(-1) }, 1500);
  }

  createPopoverContent( person, index ) {
    return (
      <div>
        <strong className={cn('person-name')}>{person.displayName}</strong>
        <div className={cn('person-title')}>{person.jobTitle}</div>
      </div>
      );
  }

  render(): ?ReactElement {
    return (
      <div className="CareersContent">
        <MajorSectionElement
          title="In order to create real value you must put people at the center of everything"
          content="We never do the same thing twice. We build business critical applications. We tackle problems we don’t always know how to solve. Every day, every project is a new challenge to conquer. You will have the opportunity to push yourself and grow from offices in beautiful Charlotte, NC and Devnver, CO. We believe in work/life balance and offer a ton of competitive perks." />
        <div className={cn('values')}>
          <div className={cn('values-title')}>
            Our Values
            <hr className={cn('values-hr')} />
          </div>
          {VALUES.map((n, i) => (
            <div className={cn('values-value')} key={i}>
              <div className={cn('values-number')}>{i + 1}</div>
              <div className={cn('values-text')}>{n}</div>
            </div>
          ))}
        </div>
        <div className={cn('benefits')}>
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
            {this.props.people.map((person, i) => (
              <li key={i} className={cn('person')} >
                <ImagePopover
                  id={'person-' + i}
                  type="person"
                  data={i}
                  handleMouseEnter={this.updateSelectedPopover.bind(this)}
                  handleMouseLeave={this.updatePopoverExpiration.bind(this)}
                  isActive={this.state.activePersonIndex !== -1 && this.state.activePersonIndex === i}
                  content={this.createPopoverContent(person, i)}
                  imgUrl={person.photoUrl} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

CareersContent.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    })
  ),
};

CareersContent.displayName = 'CareersContent';

export default Resolver.createContainer(CareersContent, {
  resolve: {
    people() {
      var FIELDS = [
        'displayName',
        'jobTitle',
        'photoUrl'
      ];

      return api(`team?fields=${FIELDS.toString()}`);
    }
  }
});
