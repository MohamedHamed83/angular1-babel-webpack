'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function makeWebpackConfig() {

    var config = {};

    config.entry = {
        app: './src/app/app.js'
    };


    config.output = {
        path: __dirname + '/dist',
        publicPath: 'http://localhost:8080/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    };


    config.devtool = 'eval-source-map';


    // Initialize module
    config.module = {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: [
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader' }
                ],
            })
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file-loader'
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
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
        new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
    ];


    config.devServer = {
        contentBase: './src/public',
        stats: 'minimal'
    };

    return config;
} ();
