const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common');
const path = require('path');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/public/index.html',
  filename: 'index.html',
  inject: 'body',
  minify: {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true
  }
});

const UglifyJsPluginConfig = new UglifyJsPlugin({
  uglifyOptions: {
    ie8: false,
    ecma: 8,
    parallel: true,
    compress: {
      drop_console: true,
      passes: 3
    },
    output: {
      comments: false,
      beautify: false
    }
  }
});

module.exports = merge(common, {
  devtool: 'source-map',
  entry: ['babel-polyfill', path.join(__dirname, '/client/src/index.jsx')],
  module: {
    rules: [
      {
        test: /\.(js?x)$/,
        use: 'babel-loader',
        include: path.join(__dirname, '/client'),
        exclude: /(node_modules|server|.vscode)/
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    UglifyJsPluginConfig,
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin({
      assets: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
});
