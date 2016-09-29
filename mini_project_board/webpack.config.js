module.exports = {
        entry: __dirname + '/src/index',
        output: {
            path: './dist',
            filename: 'bundle.js'
        },

        devServer: {
            contentBase: './dist',
            colors: true,
            historyApiFallback: true,
            inline: true,
            port: 3333
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets:['es2015', 'react']
                    }
                },
                /*추가한 코드*/
                {
                    test: /(\.css)$/,
                    loaders: ['style', 'css']
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file'
                },
                {
                    test: /\.(woff|woff2)$/,
                    loader: 'url?prefix=font/&limit=5000'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url?limit=10000&mimetype=image/svg+xml'
                }
            ]
        }
}
