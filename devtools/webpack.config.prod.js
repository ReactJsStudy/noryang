require('dotenv').load();

var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('webpack-uglify-js-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname, '../')
var DEV_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var ExtractSASS = new ExtractTextPlugin('style.css');

module.exports = {
    watch: false,
    context: DEV_PATH,
    entry: path.join(DEV_PATH, 'index'),
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [ /node_modules/ ],
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: ExtractSASS.extract(['css?sourceMap!postcss!resolve-url!sass?sourceMap'])
        }]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    resolve: {
		root: [ DEV_PATH ],
        extensions: [ '', '.js' ]
    },
    node: { fs: "empty" },
    plugins: [
        new CleanWebpackPlugin([ BUILD_PATH ], { root: ROOT_PATH }),
        new webpack.EnvironmentPlugin([ "NODE_ENV" ]),
        new HtmlWebpackPlugin({
          template: path.resolve(DEV_PATH, 'index_build.html')
        }),
        ExtractSASS,
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            debug: true,
            minimize: true,
            sourceMap: false,
            compressor: { warnings: false }
        })
    ]
}
