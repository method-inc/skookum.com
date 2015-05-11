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
  cache(
    'https://api.bamboohr.com/api/gateway.php/skookum/v1/employees/directory',
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${new Buffer(process.env.BAMBOO_API + ':x').toString('base64')}`,
      },
    }
  )
  .then(
    json => res.send(selectFields(json.employees, fields))
  )
  .catch(err => res.send({error: err.toString()}));
});


export default api;

