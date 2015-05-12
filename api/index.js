Object.assign(process.env, require('../.env'));

import __ from 'array.prototype.find';
import express from 'express';
import cache from './cache';
import contentful from './contentful';
var api = express();

const CHARLOTTE_OFFICE_ID = 1543691;

function selectFields(arr: Object|Array, fields: Array): Object|Array {
  if (Array.isArray(arr)) {
    return arr.map(n => {
      var o = {};
      for (var field of fields) {
        o[field] = n[field];
      }
      return o;
    });
  }

  var o = {};
  for (var field of fields) {
    o[field] = arr[field];
  }
  return o;
}

type BambooEmployee = {
  id: string;
  displayName: string;
  firstName: string;
  lastName: string;
  nickname: string;
  gender: string;
  jobTitle: string;
  workPhone: string;
  mobilePhone: string;
  workEmail: string;
  department: string;
  location: string;
  photoUploaded: string;
  canUploadPhoto: number;
};

var employees = () => (
  cache('https://api.bamboohr.com/api/gateway.php/skookum/v1/employees/directory', {
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${new Buffer(process.env.BAMBOO_API + ':x').toString('base64')}`,
    },
  })
);

var employee = (o) => (
  employees().then(n => (
    // TODO: make this smarter
    n.employees.find(e => e.displayName === o.displayName)
  )));

api.get('/team', function(req, res) {
  var fields = req.query.fields ? req.query.fields.split(',') : ['displayName'];

  employees()
    .then(json => res.send(selectFields(json.employees, fields)))
    .catch(err => res.send({error: err.toString()}));
});

api.get('/team/:name', function(req, res) {
  employee({displayName: req.params.name})
    .then(
      n => res.send(n),
      error => res.send({error})
    );
});

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

api.get('/contentful', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(n => n.name === 'blog_post')[0].sys.id)
    .then(id => contentful.entries({
      content_type: id,
      limit: 5,
      order: '-fields.datePublished',
    }))
    .then(
      n => res.send(n.map(n => n.fields)),
      error => res.send(error)
    );
});

var patchAuthorWithBamboo = (n, ...fields) => (
  employee({displayName: n.author.fields.name})
    .then(e => Object.assign(
      n.author,
      n.author.fields,
      e && selectFields(e, fields)
    ))
    .then(_ => n)
);

api.get('/contentful/:slug', function(req, res) {
  contentful.entries({
    query: req.params.slug,
  })
  .then(n => patchAuthorWithBamboo(n[0].fields, 'photoUrl'))
  .then(n => res.send(n))
  .catch(error => res.send({error}));
});

export default api;

