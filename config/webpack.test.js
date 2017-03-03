'use strict';

// Modules
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
module.exports = function makeWebpackConfig() {

  var config = {};

  config.resolve = {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
  };

  config.entry = () => {
    return {}
  };

  config.devtool = 'inline-source-map';

  // Initialize module
  config.module = {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'null-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'null-loader'
      }, {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
          exclude: [
            // these packages have problems with their sourcemaps
            root('node_modules/rxjs'),
          ]
        },
      {
        enforce: 'post',
        test: /\.(js)$/,
        loader: 'istanbul-instrumenter-loader',
        include: root('src'),
        exclude: [/\.spec\.js$/, /\.e2e\.js$/, /node_modules/]
      }
    ]
  };

  config.plugins = [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether"
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i,
      options: {
        emitErrors: true,
        postcss: {
          plugins: [autoprefixer]
        }
      }
    })
  ];

  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  return config;
}();
