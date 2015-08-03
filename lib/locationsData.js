/* @flow */

type Location = {
  name: String;
  nickname: String;
  addr: String;
  location: String;
  phone: String;
  map: String;
};

const LOCATIONS: Array<Location> = [
  { name: 'Charlotte',
    nickname: 'Mission Control',
    addr: '201 S. Tryon St. 15th Floor',
    location: 'Charlotte, NC 28202',
    phone: '345.123.2345',
    photo: '/public/images/charlotte-map.png',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.2127343661373!2d-80.8440336!3d35.226074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a02f8758b6eb%3A0x116dc01c862fe0ba!2sSkookum!5e0!3m2!1sen!2sus!4v1435683896234',
  },
  { name: 'Denver',
    nickname: 'Moon Base',
    addr: '707 17th St Suite 3275',
    location: 'Denver, CO 80202',
    phone: '254.123.1643',
    photo: '/public/images/denver-map.png',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.6677343628544!2d-104.99048549999998!3d39.74711390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d744e9c167%3A0xa395757a68365b04!2sSkookum%2C+Inc!5e0!3m2!1sen!2sus!4v1435683741914',
  },
];

export default LOCATIONS;

