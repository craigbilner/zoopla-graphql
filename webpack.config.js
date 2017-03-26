const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './index',
    vendor: ['react', 'react-dom', 'graphiql'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'babili'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader",
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    function() {
      this.plugin('done', function(stats) {
        const assetNames = stats.toJson().assets.reduce((manifest, { name }) => {
          const [asset, hash, , map] = name.split('.');

          if (!map) {
            manifest[asset] = {
              asset,
              hash,
            };
          }

          return manifest;
        }, {});
        require('fs').writeFileSync(
          path.join(__dirname, 'dist', 'stats.json'),
          JSON.stringify(assetNames)
        );
      });
    },
    new ExtractTextPlugin("styles.css"),
  ],
};
