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
import fs from 'fs';

var siteMap = fs.readFileSync(join(process.cwd(), 'sitemap.xml'));

var REDIRECTS = [
  ['case-studies', 'work'],
  ['node', 'open-source'],
  ['hunter-loftis-speaker-info', 'events'],
  ['events/townhall-event-w-mayor-anthony-foxx', 'events'],
  ['josh-oakhurst-speaker-info', 'events'],
  ['events/mobile-apps-from-a-z-a-skookum-digital-workshop', 'events'],
  ['visit-us', 'contact'],
  ['living-and-working-in-charlotte-north-carolina-jobs-relocating', 'careers'],
  ['jobs', 'careers'],
  ['internet-of-things', 'the-internet-of-things-applications'],
  ['it-consulting', 'capabilities'],
  ['blog/tags/net', 'blog/tags/development'],
  ['blog/node-js-you-learn-to-write-the-real-time-web/dsc_4121/', 'blog'],
  ['blog/forget-native-learn-to-write-html5-apps/dsc_4048/', 'blog'],
  ['blog/node-js-you-learn-to-write-the-real-time-web/dsc_4129/', 'blog'],
  ['jobs', 'careers'],
  ['resources/solve-for-bob.pdf', 'public/pdfs/solve-for-bob.pdf']
];

var tmpl = o => read('./index.html', 'utf8')
  .replace('†react†', o.html)
  .replace('†__resolver__†', JSON.stringify(o.data))
  .replace('†head†', resources());

var app = express();

app.use('/api', api);
app.use('/cdn', express.static(join(process.cwd(), 'dist')));
app.use('/public', express.static(join(process.cwd(), 'public')));
app.use('/email', express.static(join(process.cwd(), 'email')));

REDIRECTS.forEach(function(redirect) {
  var [old, current] = redirect;
  app.get('/' + old, function(req, res) {
    res.redirect(301, '/' + current);
  });
});

// sitemap.xml
app.get('/sitemap.xml', function(req, res) {
  res.type('application/xml; charset=utf-8');
  res.send(siteMap);
});

// Google Webmaster Tools Verification.
app.get('/google81a679ad3faaa5e0.html', function(req, res) {
  res.type('text/html');
  res.send('google-site-verification: google81a679ad3faaa5e0.html');
});

// robots.txt
app.get('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow:\n');
});

app.get('*', function(req, res) {
  if (req.url !== '/' && req.url.slice(-1) === '/') {
    return res.redirect(301, req.url.substring(0, req.url.length - 1));
  }

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

  router.run((Handler, state) => {
    var isNotFound = state.routes.some(function(route) {
      return route.isNotFound;
    });

    var status = isNotFound ? 404 : 200;

    return (Resolver.renderToString(<Handler />)
      .then(o => res.status(status).send(tmpl({html: o.toString(), data: o.data}))));
  });
});

debug(`app server starting on ${process.env.PORT}`);
var server = app.listen(process.env.PORT || 4444, function () {
  var host = server.address().address;
  var port = server.address().port;

  debug('%s listening at http://%s:%s', 'The Skookums are', host, port);
});
