var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});
var BrowserSyncPluginConfig = new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  server: { baseDir: ['./dist'] }
});
var ExtractTextPluginConfig = new ExtractTextPlugin('main.css', {
  allChunks: true
});

module.exports = {
  entry:[
    './src/main.js'
  ],
  output:{
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {test: /\.js$/,exclude: /node_modules/,loader: "babel-loader"},
      {test: /\.scss$/,loader: ExtractTextPlugin.extract('css!sass')},
      {test: /\.css$/,loader: 'style!css!'},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,loader: 'file-loader'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig,
            BrowserSyncPluginConfig,
            ExtractTextPluginConfig]
}
