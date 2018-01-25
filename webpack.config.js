import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.resolve(__dirname, 'client/public'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},
            { test: /\.css$/, use: [ 'style-loader', 'css-loader']}
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'public/index.html'
    })]
}