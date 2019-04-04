const webpack = require('webpack');
const PACKAGE = require('./package.json');
const banner = `${PACKAGE.name} v${PACKAGE.version} | ${PACKAGE.homepage}`;

module.exports = [{

  mode: 'production',

  // devtool: 'hidden-source-map',

  entry: {
    'index': './index.js'
  },

  output: {
    filename: 'counter-up.min.js',
    library: 'counterUp',
    libraryTarget: 'umd'
  },

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              'transform-es2015-destructuring',
            ]
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
}];
