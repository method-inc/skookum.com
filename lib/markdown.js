/* @flow */

import React, {Component} from 'react';
import Markdown from 'markdown-react';
import Gist from 'Gist';
import Video from 'Video';

var originalImpl = Markdown.getDefaultReactComponents();
var components = Markdown.getDefaultReactComponents();

class MarkdownLink extends Component {
  render(): ReactElement {
    var children = this.props.builder.buildValues(this.props.component.values);
    if (/^gist#/.test(children[0])) {
      return (
        <Gist id={children[0].split('gist#')[1]} />
      );
    }

    if (/^video#/.test(children[0])) {
      return (
        <Video src={children[0].split('video#')[1]} />
      );
    }

    var Impl = originalImpl[Markdown.EL.LINK];
    return (
      <Impl {...this.props} />
    );
  }
}

// inject our custom builder elements
components[Markdown.EL.LINK] = MarkdownLink;

var Builder = new Markdown.ReactBuilder(components);

export default function markdown(text) {
  var ast = Markdown.buildMarkdownAST(text);
  return React.renderToStaticMarkup(Builder.build(ast));
}

