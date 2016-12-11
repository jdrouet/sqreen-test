const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const currentPath = __dirname;
const sourcePath = path.join(currentPath, 'source');

module.exports = {
  entry: {
    main: path.join(sourcePath, 'main.jsx')
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: currentPath,
    filename: 'build/bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: currentPath,
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
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ],
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: [sourcePath],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('build/[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'VERSION': JSON.stringify('development'),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ]
};
