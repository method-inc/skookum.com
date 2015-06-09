/**
 * Node/io.js and the web are both compilation targets.
 * This is a list of node_modules that webpack should
 * pipe through it’s loaders system when creating the
 * server build.
 **/

var WHITE_LIST_OF_NODE_MODULES = [
  'markdown-react',
  'react-autodoc',
  'react-router',
  'react-tabs',
];

module.exports = WHITE_LIST_OF_NODE_MODULES;

