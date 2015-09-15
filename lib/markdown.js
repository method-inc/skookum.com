/* @flow */

import React, {Component} from 'react';
import marked from 'marked';
import Gist from 'Gist';
import Video from 'Video';

var renderer = new marked.Renderer();

var originalLink = renderer.link;

renderer.link = function (href, title, text) {

  var output = null;

  if (/^gist#/.test(text)) {
    output = (
      <Gist id={text.split('gist#')[1]} />
    );
  }

  if (/^video#/.test(text)) {
    output = (
      <Video src={text.split('video#')[1]} />
    );
  }

  if (output) {
    return React.renderToStaticMarkup(output);
  }

  return '<a href="' + href + '">' + text + '</a>';
};

export default function markdown(text) {
  return marked(text, {renderer});
}
