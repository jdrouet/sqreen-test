const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const package = require('./package.json');

const currentPath = __dirname;
const sourcePath = path.join(currentPath, 'source');
const buildPath = path.join(currentPath, 'build');

module.exports = {
  entry: [
    path.join(sourcePath, 'main.jsx')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: buildPath,
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [sourcePath],
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      'process.env': {
        'VERSION': JSON.stringify(package.version),
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {warnings: false}
    })
  ]
};
