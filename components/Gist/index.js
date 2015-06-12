/* @flow */
'use strict';

import React, {Component, PropTypes} from 'react';

class Gist extends Component {
  shouldComponentUpdate(nextProps: mixed): boolean {
    return this.props.id !== nextProps.id;
  }

  componentDidMount(): void {
    this._updateIframeContent();
  }

  componentDidUpdate(prevProps: mixed, prevState: mixed): void {
    this._updateIframeContent();
  }

  id(): string {
    return `gist-${this.props.id}`;
  }

  _updateIframeContent(): void {
    if (typeof document === 'undefined') return;

    var iframe = document.getElementById(this.id());
    var doc = iframe.document || iframe.contentDocument || iframe.contentWindow.document;

    var gistScript = `<script type="text/javascript" src="https://gist.github.com/${this.props.id}.js"></script>`;
    var styles = '<style>*{font-size:12px;}</style>';
    var resizeScript = `onload="parent.document.getElementById('gist-${this.props.id}').style.height=document.body.scrollHeight + 'px'"`;
    var iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`;

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  }

  render(): ReactElement {
    // Ensure that the content is rendered on the client, but don’t delay
    // the page render call, but don’t set this timeout on the server
    if (typeof document === 'undefined') {
      setTimeout(_ => this._updateIframeContent(), 1000);
    }

    return (
      <iframe width="100%" frameBorder={0} id={this.id()} />
    );
  }
}

Gist.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Gist;
