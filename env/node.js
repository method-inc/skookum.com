/** @flow */
require('es6-promise').polyfill();
require('isomorphic-fetch');
var debug = require('debug')('app startup');

import express from 'express';
import React from 'react';
import Router from 'react-router';
import {Resolver} from 'react-resolver';
import api from '../api';
import routes from '../routes';
import {resources} from './webpack';

import {readFileSync as read} from 'fs';
import {join} from 'path';

var tmpl = o => read('./index.html', 'utf8')
  .replace('†react†', o.html)
  .replace('†__resolver__†', JSON.stringify(o.data))
  .replace('†head†', resources());

var app = express();

app.use('/api', api);
app.use('/cdn', express.static(join(process.cwd(), 'dist')));
app.use('/public', express.static(join(process.cwd(), 'public')));

app.get('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow:');
});

app.get('*', function(req, res) {
  var router = Router.create({
    routes: routes,
    location: req.url,
    onAbort(redirect) {
      res.writeHead(303, {Location: redirect.to});
      res.end();
    },
    onError(err) {
      debug('Routing Error');
      debug(err);
    },
  });

  router.run((Handler, state) => (
    Resolver.renderToString(<Handler />)
      .then(o => res.send(tmpl({html: o.toString(), data: o.data})))
  ));
});

debug(`app server starting on ${process.env.PORT}`);
var server = app.listen(process.env.PORT || 4444, function () {
  var host = server.address().address;
  var port = server.address().port;

  debug('%s listening at http://%s:%s', 'The Skookums are', host, port);
});
