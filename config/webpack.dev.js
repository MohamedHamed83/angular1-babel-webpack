'use strict';

// Modules
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
module.exports = function makeWebpackConfig() {

    var config = {};

    config.entry = {
        app: './src/app/app.js'
    };


    config.output = {
        path: root('../dist'),
        publicPath: 'http://localhost:8080/',
        filename: 'js/[name].js',
        chunkFilename: '[id].chunk.js'
    };


    config.devtool = 'source-map';


    // Initialize module
    config.module = {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['to-string-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ],
                })
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    };

    config.plugins = [
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/i,
            options: {
                postcss: {
                    plugins: [autoprefixer]
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
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