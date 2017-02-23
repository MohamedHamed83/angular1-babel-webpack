'use strict';

// Modules
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const precss = require('precss');
const mqpacker = require('css-mqpacker');
const WebpackMd5Hash = require('webpack-md5-hash');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
module.exports = function makeWebpackConfig() {

  var config = {};

  config.entry = {
    vendors: './src/vendors',
    app: './src/app/app.js'
  };


  config.output = {
    path: root('../dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js'
  };


  config.devtool = 'source-map';


  // Initialize module
  config.module = {
    rules: [{
        test: /\.js$/,
        loaders: ['ng-annotate-loader', 'babel-loader'],
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
    new WebpackMd5Hash(),
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
      debug: false,
      minimize: true,
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
    }),
        new ProgressPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new UglifyJsPlugin({
      comments: false,
      compress: {
        dead_code: true,
        screw_ie8: true,
        unused: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      }
    })
  ];

  config.devServer = {
    contentBase: './src',
    historyApiFallback: true,
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false
    }
  };

  return config;
}();
