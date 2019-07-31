const path = require('path')
const production = require('./config/webpack.config.prod.js')
const development = require('./config/webpack.config.dev.js')

const NODE_ENV = process.env.NODE_ENV || 'prod'

const config = {
  entry: './src/index.jsx',
  filename: 'js/index.js',
  publicPath: (NODE_ENV === 'dev')
    ? 'http://localhost:3000/'
    : 'https://video-search-application.herokuapp.com/',
  outputPath: path.join(__dirname, '/public'),
  devServerPort: 3000,
  resolvePath: ['src', 'config'],
}


if (NODE_ENV === 'dev') {
  module.exports = development({
    entry: config.entry,
    filename: config.filename,
    publicPath: config.publicPath,
    outputPath: config.outputPath,
    devServerPort: config.devServerPort,
    resolvePath: config.resolvePath,
  })
}


if (NODE_ENV === 'prod') {
  module.exports = production({
    entry: config.entry,
    filename: config.filename,
    publicPath: config.publicPath,
    outputPath: config.outputPath,
    resolvePath: config.resolvePath,
  })
}
