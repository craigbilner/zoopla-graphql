const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-maps',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
};