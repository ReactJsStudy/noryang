require('dotenv').load();

var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DEV_URL = process.env.DEV_URL;
var DEV_PATH   = path.resolve(__dirname, '../src');

var ExtractSASS = new ExtractTextPlugin('style.css');

module.exports = {
    watch: true,
    progress: true,
    devtool: 'eval',
    context: DEV_PATH,
    entry: [
        'webpack-hot-middleware/client?path=' + DEV_URL + '__webpack_hmr',
        'webpack/hot/only-dev-server',
        path.resolve(DEV_PATH, 'index')
    ],
    output: {
        path: DEV_PATH,
        filename: 'bundle.js',
        publicPath: DEV_URL
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [ DEV_PATH ],
                exclude: [ /node_modules/ ],
                loader: 'react-hot!babel?cacheDirectory'
            }, {
                test: /\.scss$/,
                loader: ExtractSASS.extract(['css?sourceMap!postcss!resolve-url!sass?sourceMap'])
            }
        ]
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
        // 기동시의 환경변수를 js 에서도 사용할 수 있게 한다.
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
        ]),
        ExtractSASS,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
