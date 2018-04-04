// const path = require('path');
// const webpack = require('webpack');
// const merge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const common = require('./webpack.config.common');

// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './client/public/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

// module.exports = merge(common, {
//   devtool: 'cheap-module-eval',
//   entry: [
//     path.join(__dirname, '/client/src/index.jsx')
//   ],
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   module: {
//     rules: [{
//       test: /\.(js?x)$/,
//       use: ['babel-loader'],
//       include: path.join(__dirname, '/client'),
//       exclude: '/(node_modules|server|.vscode)/'
//     },
//     {
//       test: /\.js$/,
//       exclude: /node_modules/,
//       use: ['eslint-loader']
//     }]
//   },
//   plugins: [
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery',
//       'window.jQuery': 'jquery',
//       Hammer: 'hammerjs/hammer',
//       createDayLabel: 'jquery',
//       createWeekdayLabel: 'jquery',
//       activateOption: 'jquery',
//       leftPosition: 'jquery'
//     }),
//     HtmlWebpackPluginConfig,
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(), // enable HMR globally
//     new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
//   ]
// });
