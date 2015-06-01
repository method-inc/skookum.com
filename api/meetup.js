import cache from './cache';

const CHARLOTTE_OFFICE_ID = 1543691;
const DENVER_OFFICE_ID = 23650754;

export default function(req, res) {
  var charlotte = cache(`https://api.meetup.com/2/events?sign=true&venue_id=${CHARLOTTE_OFFICE_ID}&page=20&key=${process.env.MEETUP_API}`);
  var denver = cache(`https://api.meetup.com/2/events?sign=true&venue_id=${DENVER_OFFICE_ID}&page=20&key=${process.env.MEETUP_API}`);

  Promise.all([charlotte, denver])
    .then(json => res.send(json.reduce((o, n, i) => {
      if (i === 0) o.charlotte = n.results;
      else o.denver = n.results;
      return o;
    }, {})))
    .catch(error => res.send({error}));
}

