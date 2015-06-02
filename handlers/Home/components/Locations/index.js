/** @flow */

require('./styles.css');

import React from 'react';
import Typography from 'Typography';
var cn = s => `Locations-${s}`;

const LOCATIONS = [
  { name: 'Charlotte',
    addr: '201 S. Tryon St. 15th Floor',
    location: 'Charlotte, NC 28202',
    phone: '345.123.2345',
  },
  { name: 'Denver',
    addr: '707 17th St Suite 3275',
    location: 'Denver, CO 80202',
    phone: '254.123.1643',
  },
];


class Locations extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Locations">
        {LOCATIONS.map(n => (
          <div className={cn('block')} key={n.name}>
            <img className={cn('image')} src={`/public/images/home-${n.name.toLowerCase()}.png`} />
            <div className={cn('content')}>
              <div className={cn('section')}>
                <Typography type={Typography.PRIMARY_SECTION_HEADER}>{n.name}</Typography>
              </div>
              <div className={cn('section')}>
                <div className={cn('detail')}>{n.addr}</div>
                <div className={cn('detail')}>{n.location}</div>
                <div className={cn('detail')}>{n.phone}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Locations;
