const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, '/client/src/index.jsx')
      ],
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },
  module: {
    rules: [
        {
            test: /\.(js?x)$/,
            use: ['babel-loader'],
            include: path.join(__dirname, '/client'),
            exclude: '/(node_modules|server|.vscode)/'
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['eslint-loader']
          },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(mp3)$/,
        loader: 'file-loader?name=sounds/[name].[ext]'
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('./css/styles.css'),
    // new Dotenv({
    //   path: './.env', // Path to .env file
    //   systemvars: true // load all system variables
    //     // as well (useful for CI purposes)
    // })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  node: {
    dns: 'empty',
    net: 'empty',
    fs: 'empty'
  }
};
