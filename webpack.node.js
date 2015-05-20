
module.exports = require('./scripts/webpack.base')({
  env: 'development',
  target: 'node',
  serverPort: process.env.PORT || 4444,
});


