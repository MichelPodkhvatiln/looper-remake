const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const webpack = require('webpack');

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV settings gonna be here
  mode: 'development',
  // Source map
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ],
  devServer: {  // configuration for webpack-dev-server
    contentBase: './src',  //source of static assets
    port: 8080, // port to run dev-server
  } 
});
// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
 resolve(devWebpackConfig)
})