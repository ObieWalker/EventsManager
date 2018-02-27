const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/public/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader' },
            { test: /\.css$/, loader: 'css-loader', query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' }
            //,
            // {
            //     test: /\.s?css$/,
            //     loaders: ['style-loader', 'css-loader', 'sass-loader']
            // },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "Hammer": "hammerjs/hammer",
            createDayLabel: "jquery",
            createWeekdayLabel: "jquery",
            activateOption: "jquery",
            leftPosition: "jquery"
        })
    ]
    [HtmlWebpackPluginConfig],
        resolve: {
        extensions: ['.js', '.css', '.jsx'],
            modules: [
                'node_modules'
            ],
            
    },
    devServer: {
        historyApiFallback: true
    },
}