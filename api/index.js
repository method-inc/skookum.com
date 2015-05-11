Object.assign(process.env, require('../.env'));

import express from 'express';
import cache from './cache';
var api = express();

function selectFields(arr: Array, fields: Array): Array {
  return arr.map(n => {
    var o = {};
    for (var field of fields) {
      o[field] = n[field];
    }
    return o;
  });
}


api.get('/team', function(req, res) {
  var fields = req.query.fields ? req.query.fields.split(',') : ['displayName'];
  cache('https://api.bamboohr.com/api/gateway.php/skookum/v1/employees/directory', {
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${new Buffer(process.env.BAMBOO_API + ':x').toString('base64')}`,
    },
  })
  .then(json => res.send(selectFields(json.employees, fields)))
  .catch(err => res.send({error: err.toString()}));
});

var CHARLOTTE_OFFICE_ID = 1543691;
api.get('/events', function(req, res) {
  var fields = req.query.fields ? req.query.fields.split(',') : ['displayName'];
  var charlotte = cache(`https://api.meetup.com/2/events?sign=true&venue_id=${CHARLOTTE_OFFICE_ID}&page=20&key=${process.env.MEETUP_API}`)
    .then(json => res.send(json.results))
    .catch(e => res.send({error: e}));

  /*
  Promise.all([charlotte])
    .then(n => [n[0].json()])
    .then(json => res.send({n: n}))
  */
});

export default api;

