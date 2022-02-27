const HtmlWebpackPlugin = require('html-webpack-plugin')
const AssetsPlugin = require('./assets-plugin')
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: "./src/index.js",
  // entry: {
  //   page1: './src/page1.js',
  //   page2: './src/page2.js',
  //   page3: './src/page3.js'
  // },
  devServer: {

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ['main']
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "page1.html",
    //   chunks: ['page1']
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "page2.html",
    //   chunks: ['page2']
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "page3.html",
    //   chunks: ['page3']
    // }),
    new AssetsPlugin(),
    new PreloadWebpackPlugin({
      rel: 'prefetch'
    })
  ]
}