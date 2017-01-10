var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

require('webpack/lib/ResolverPlugin');


var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  entry: './src/js/main',
  externals: {
    'jquery': '$'
  },
  output: {
    path: './site/assets',
    filename: 'main.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        loader : 'babel'
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      { test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?root=."
      },
      {
	    test: /\.scss$/,
	    loader: ExtractTextPlugin.extract('css!sass')
	   },
     {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=200000!img?progressive=true'
     },
     {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader  : 'url?limit=90000'
    },

     {
           test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
           loader: "imports?this=>window"
       }
    ]
  },


   plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};

module.exports = config;
