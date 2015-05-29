import __ from 'array.prototype.find';
import express from 'express';
import cache from './cache';
import contentful from './contentful';
import meetup from './meetup';
var api = express();

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

api.get('/events', meetup);

var capitalize = s => s[0].toUpperCase() + s.slice(1);

api.get('/contentful', function(req, res) {
  const PER_PAGE = 5;
  const PAGE = req.query.page || 1;
  var content_type = req.query.content_type || 'blog_post';
  var query = {};
  if (req.query.tag) {
    query['fields.tags[in]'] = capitalize(req.query.tag);
  }

  if (content_type === 'blog_post') {
    var order =  '-fields.datePublished';
  }

  return contentful.contentTypes()
    .then(n => n.filter(n => n.name === content_type)[0].sys.id)
    .then(id => contentful.entries({
      content_type: id,
      limit: req.query.limit || PER_PAGE,
      order: order,
      skip: PER_PAGE * (PAGE - 1),
      ...query
    }))
    .then(
      n => res.send(n.map(n => n.fields)),
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
    .then(n => n.filter(n => n.name === 'blog_post')[0].sys.id)
    .then(id => contentful.entries({
      content_type: id,
      limit: 3,
      'fields.featured': true,
    }))
    .then(
      n => res.send(n.map(n => n.fields)),
      error => res.send(error)
    );
});

api.get('/contentful/:slug', function(req, res) {
  contentful.entries({
    query: req.params.slug,
  })
  .then(n => (
    // promises can make some things pretty ugly
    n.length === 0 ?
      res.sendStatus(404) :
      patchAuthorWithBamboo(n[0].fields, 'photoUrl', 'jobTitle')
  ))
  .then(n => res.send(n))
  .catch(error => res.send({error}));
});

export default api;

