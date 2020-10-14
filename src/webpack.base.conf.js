const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index:  __dirname + "/src/js/index.js", // webpack entry point. Module to start building dependency graph
    contact: __dirname + "/src/js/index.js", // webpack entry point. Module to start building dependency graph
  },
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'js/[name].js',  // Name of generated bundle after build
  },
  module: {  // where we defined file patterns and their loaders
      rules: [ 
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/
          ]
        },
        {
          test: /\.(sass|scss)$/,
          use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'postcss-loader',
                options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
              },
              {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'postcss-loader',
                options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
              }
            ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use:[
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]  
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        },
        
      ]
  },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        inject: true,
        chunks: ['index'],
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: __dirname + "/src/contact.html",
        chunks: ['index'],
        filename: 'contact.html'
      }),
      new MiniCssExtractPlugin({
        filename: "css/main.css",
      }),
      new CopyWebpackPlugin([
        { from: "./src/img/png", to: "img/png" },
        { from: "./src/img/svg", to: "img/svg" },
        { from: "./src/img/jpg", to: "img/jpg" },
        { from: "./src/img/webp", to: "img/webp"},
        { from: "./src/img/favicon", to: "img/favicon"},
        { from: "./src/fonts", to : "fonts"},
        { from: "./src/css", to : "css"}
      ]),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
  ] 
};