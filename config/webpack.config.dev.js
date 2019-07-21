const path = require('path')
const routes = require('../webpack-dev-server/routes')

module.exports = ({
  entry,
  filename,
  publicPath,
  outputPath,
  resolvePath,
  devServerPort,
}) => (
  {
    mode: 'development',
    entry,
    output: {
      filename,
      chunkFilename: 'js/[name].js',
      publicPath,
      path: outputPath,
    },
    module: {
      rules: [
        {
          test: /\.jsx$|\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: resolvePath.map(item => (
                  path.join(__dirname, item)
                )),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [...resolvePath, 'node_modules'],
      extensions: ['.js', '.jsx', '.scss'],
    },
    devServer: {
      inline: true,
      contentBase: outputPath,
      compress: true,
      port: devServerPort,
      before: (app) => {
        routes({
          app,
          publicPath,
          title: 'Youtube search dev',
        })
      },
    },
    devtool: 'eval-cheap-module-source-map',
    watch: true,
  }
)
