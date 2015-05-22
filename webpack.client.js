module.exports = require('./scripts/webpack.base')({
  hotloader: true,
  serverPort: process.env.PORT,
  hotServerPort: 4445,
  env: 'development',
  target: 'web',
});


