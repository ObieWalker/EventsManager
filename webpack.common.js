const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(mp3)$/,
        loader: 'file-loader?name=sounds/[name].[ext]'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/styles.css')
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    dns: 'empty',
    net: 'empty',
    fs: 'empty'
  }
};
