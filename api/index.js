// load in polyfills
require('array.prototype.find');

import bodyParser from 'body-parser';

import express from 'express';
import cache from './cache';
import contact from './contact';
import contentful from './contentful';
import meetup from './meetup';

var api = express();
api.use(bodyParser.urlencoded());
api.use(bodyParser.json());

function selectFields(arr: Object|Array, fields: Array): Object|Array {
  if (Array.isArray(arr)) {
    return arr.map(n => selectFields(n, fields));
  }

  var o = {};
  for (var field of fields) {
    o[field] = arr[field];
  }
  return o;
}

// type BambooEmployee = {
//   id: string;
//   displayName: string;
//   firstName: string;
//   lastName: string;
//   nickname: string;
//   gender: string;
//   jobTitle: string;
//   workPhone: string;
//   mobilePhone: string;
//   workEmail: string;
//   department: string;
//   location: string;
//   photoUploaded: string;
//   canUploadPhoto: number;
// };

var employees = () => (
  cache('https://api.bamboohr.com/api/gateway.php/skookum/v1/employees/directory', {
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${new Buffer(process.env.BAMBOO_API + ':x').toString('base64')}`,
    },
  })
);

var employee = o =>
  employees().then(n =>
    // TODO: make this smarter
    n.employees.find(e => e.displayName === o.displayName)
  );

var careers = () =>
  cache('https://api.greenhouse.io/v1/boards/skookum/embed/jobs?content=true');

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

api.get('/events', meetup);

var capitalize = s => s[0].toUpperCase() + s.slice(1);

api.get('/contentful', function(req, res) {
  const PER_PAGE = 5;
  const PAGE = req.query.page || 1;
  const contentType = req.query.content_type || 'blog_post';

  var query = {};
  var order = '';
  if (req.query.tag) {
    query['fields.tags[in]'] = capitalize(req.query.tag);
  }

  for (var key in req.query) {
    if (key.indexOf('fields') > -1 && req.query.hasOwnProperty(key)) {
      query[key] = req.query[key];
    }
  }

  if (contentType === 'blog_post') {
    order = '-fields.datePublished';
  }

  if (contentType === 'news') {
    order = '-fields.date';
  }

  if (contentType === 'service') {
    order = 'fields.order';
  }

  return contentful.contentTypes()
    .then(n => n.filter(c => c.name === contentType)[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      limit: req.query.limit || PER_PAGE,
      order: order,
      skip: PER_PAGE * (PAGE - 1),
      ...query,
    }))
    .then(
      n => res.send({items: n.map(r => r.fields), total: n.total}),
      error => res.send(error)
    );
});

var patchAuthorWithBamboo = (n, ...fields) => (
  employee({displayName: n.author.fields.name})
    .then(e => (
      Object.assign(
        n.author,
        n.author.fields,
        e && selectFields(e, fields)
      ), n)
    )
);

api.get('/contentful/featured', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'featured_posts')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      limit: 3,
    }))
    .then(n => n[0].fields.article)
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/capability_highlights/:slug', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'capability_highlights')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      'fields.capability': req.params.slug,
      order: 'fields.order',
    }))
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/capability/:slug', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'capability')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      'fields.slug': req.params.slug,
    }))
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/capabilities', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'capability')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      order: 'fields.order',
    }))
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/leaders', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'leader')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
    }))
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/values', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'value')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      order: 'fields.order',
    }))
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/events', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'event')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      'fields.date[gte]': new Date().toISOString(),
    }))
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/hero/:slug', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'hero')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      'fields.slug': req.params.slug,
    }))
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/text/:slug', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'text')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      'fields.page': req.params.slug,
    }))
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/info/:slug', function(req, res) {
  return contentful.contentTypes()
    .then(n => n.filter(r => r.name === 'info_page')[0].sys.id)
    .then(id => contentful.entries({
      /*eslint-disable*/
      content_type: id,
      /*eslint-enable*/
      'fields.slug': req.params.slug,
    }))
    .then(
      n => res.send(n.map(r => r.fields)),
      error => res.send(error)
    );
});


api.get('/contentful/:slug', function(req, res) {
  var bestFit = options => options.find(o => o.fields.slug === req.params.slug);

  contentful.entries({
    query: req.params.slug,
  })
  .then(n => (
    n.length === 0 ? res.sendStatus(404) :
    n.length === 1 ? n[0] : bestFit(n)
  ))
  .then(n => (
    n.length === 0 ? res.sendStatus(404) :
    patchAuthorWithBamboo(n.fields, 'photoUrl', 'jobTitle')
      .catch(error => res.send({error, message: 'patchAuthorWithBamboo failed'}))
  ))
  .then(n => res.send(n))
  .catch(error => res.send({error}));
});

api.get('/careers', function(req, res) {
  careers().then(n => res.send(n.jobs));
});

api.post('/contact', contact);

export default api;
