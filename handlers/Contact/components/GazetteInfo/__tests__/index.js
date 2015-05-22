/*global jest:true, describe: true, it: true, expect: true, spyOn: true*/
/*eslint no-console: 0*/

jest.dontMock('../index.js');

describe('GazetteInfo', function() {
  it('validates on propTypes', function() {
    spyOn(console, 'warn');

    const React = require('react');
    const Renderer = require('react/lib/ReactTestUtils').createRenderer();
    const GazetteInfo = require('../index.js');

    Renderer.render(
      <GazetteInfo />
    );

    const REQUIRED_PROP_TYPES = [];

    expect(console.warn.calls.length).toBe(REQUIRED_PROP_TYPES.length);
  });

  it('renders', function() {
    const React = require('react');
    const Renderer = require('react/lib/ReactTestUtils').createRenderer();
    const GazetteInfo = require('../index.js');

    Renderer.render(
      <GazetteInfo />
    );

    const result = Renderer.getRenderOutput();

    expect(result).toBeDefined();
  });
});
