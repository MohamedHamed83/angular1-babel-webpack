'use strict';

// Modules
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var localPath = 'http://localhost:8080/';
const precss = require('precss');
const mqpacker = require('css-mqpacker');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
module.exports = function makeWebpackConfig() {

  var config = {};

  config.entry = {
    vendors: './src/vendors',
    app: './src/app/app'
  };

  config.output = {
    path: root('../dist'),
    publicPath: localPath,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  };


  config.devtool = 'cheap-module-source-map';


  // Initialize module
  config.module = {
    rules: [{
        test: /\.js$/,
        loaders: [{
          loader: 'ng-annotate-loader'
        }, {
          loader: 'babel-loader'
        }, {
          loader: 'eslint-loader',
          options: {
            emitError: false,
            fix: true,
            // default value
            formatter: require("eslint/lib/formatters/stylish"),

            // community formatter
            formatter: require("eslint-friendly-formatter"),
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [{
              loader: 'css-loader'
            }, {
              loader: 'postcss-loader',
              options: {
                postcss: [
                  precss(),
                  autoprefixer({
                    browsers: ['last 2 versions', 'iOS 7', 'ios 6', '> 5%', 'IE <= 9', 'safari <= 7', 'opera <= 20', 'android 4'],
                  }),
                  mqpacker(),
                ],
              },
            },
            {
              loader: 'sass-loader'
            }
          ],
        })
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              postcss: [
                precss(),
                autoprefixer({
                  browsers: ['last 2 versions', 'iOS 7', 'ios 6', '> 5%', 'IE <= 9', 'safari <= 7', 'opera <= 20', 'android 4'],
                }),
                mqpacker(),
              ],
            },
          }],
        })
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }, {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  };

  config.plugins = [
    new OpenBrowserPlugin({
      url: localPath
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendors'],
      minChunks: Infinity
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/,
      options: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    }),
    new HtmlWebpackPlugin({
      chunkSortMode: 'dependency',
      template: './src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false,
      allChunks: true
    })
  ];


  config.devServer = {
    contentBase: './src/public',
    stats: 'minimal'
  };

  return config;
}();
