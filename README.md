# Skookum.com: 2015 and beyond

We’re now eating our own ice cream. The Skookum.com website is built with
https://github.com/Skookum/generator-genreact.

It may be a bit overwhelming if you try to understand all of it right out of the
gate, though. This is a many layered architecture that sets you up for success
at every level. It is highly opinionated, but attempts to hold these opinions
loosely so that you can change it if you so desire.

## Get Hacking

Requires node. Ask @jordancardwell or @iamdustan for a makefile with the
required environment variables.

Otherwise disable all things that talk to third party services and do the
following:

* `npm install`
* Ensure you have `CONTENTFUL_SPACE` and `CONTENTFUL_TOKEN` are set.
* `npm start`
* `open localhost:4444`

## Generator commands

* `yo react:component MyComponentName`
* `yo react:component MyFlashyComponent --Handler MyPageHandler`
* `yo react:handler MyPageHandler`
* `yo react:handler MyPageHandler/MySectionHandler`

## A few of the things you will find

Pablo Picaso said that great artists steal. Whilst not a copy-paste deal
(plagiarism), this toolchain takes the best practices and experiences we’ve had
creating great consumer products and bundles it together for us in a package
that allows us to not just get up and running quickly, but to iterate
effectively.

A few of the things that you will find in here:

* An amazing development environment. There is hot-reload tooling for both the
  client and server built-in.
* A component architecture with colocated concerns.
* Test suites that are ready to go.
* A UI toolchain. We expect and prefer that you’re data layer be somewhere else.
  The data and UI layers should be able to scale independently as needed.
* SuitCSS conformance checking. CSS in and of itself includes many foot-guns.
  Suit will keep the safety on. (We will likely be exploring other more
  restrictive options in the future)
* Rich documentation and style guide web interface.

Ideally, in this environment you should have less to think about while writing a
component. You don’t need to worry about how compilation happens or how to
ensure that the CSS a component needs gets onto a page. You shouldn’t need to
worry about how the final files are delivered to a client in production. These
are all practices that are understood well, but full of nuance and tradeoffs. We
have tuned—and continue to tune—these characteristics.

## Tools in Use

* Webpack
* React
* react-router
* react-resolver
* jest

## License

This generator and toolchain is MIT Licensed. The projects and tools we bring
together for you each have their own license and terms you should be aware of.
