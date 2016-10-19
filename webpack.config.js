var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPluginConfig = new ExtractTextPlugin('bundle.css', {
  allChunks: true
});

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry:[
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './src/main.js'
  ],
  output:{
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {test: /\.js$/,exclude: /node_modules/,loader: "babel-loader"},
      {test: /(\.scss|\.css)$/,loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,loader: 'file-loader'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            HtmlWebpackPluginConfig,
            ExtractTextPluginConfig]
}
