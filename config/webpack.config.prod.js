const path = require('path')

module.exports = ({
  entry,
  filename,
  publicPath,
  outputPath,
  resolvePath,
}) => (
  {
    mode: 'production',
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
          enforce: 'pre',
          test: /\.jsx$|\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
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
  }
)
