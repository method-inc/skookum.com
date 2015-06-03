/* @flow */

type Location = {
  name: String;
  nickname: String;
  addr: String;
  location: String;
  phone: String;
};

const LOCATIONS: Array<Location> = [
  { name: 'Charlotte',
    nickname: 'Mission Control',
    addr: '201 S. Tryon St. 15th Floor',
    location: 'Charlotte, NC 28202',
    phone: '345.123.2345',
  },
  { name: 'Denver',
    nickname: 'Moon Base',
    addr: '707 17th St Suite 3275',
    location: 'Denver, CO 80202',
    phone: '254.123.1643',
  },
];

export default LOCATIONS;

