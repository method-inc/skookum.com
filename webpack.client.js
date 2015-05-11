module.exports = require('./scripts/webpack.base')({
  hotloader: true,
  serverPort: 4444,
  hotServerPort: 4445,
  env: 'development',
  target: 'web',
});


