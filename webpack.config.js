const HtmlWebpackPlugin = require('html-webpack-plugin')
const AssetsPlugin = require('./assets-plugin')
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  // entry: "./src/index.js",
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js',
    page3: './src/page3.js'
  },
  devServer: {

  },
  optimization: {
    splitChunks: {
      // all = async + initial 表示哪些代码块需要分割，默认是 async 异步。all 等于同步的 initial 加异步的 async
      chunks: "all",
      // 生成 chunk 的最小体积（以 bytes 为单位）分割出去的代码最小的体积是多少 0 就是不限制
      minSize: 0,
      // 拆分前必须共享模块的最小 chunks 数
      minChunks: 2,
      // 缓存组是用来指定代码分割的条件，哪些模块应该被提取哪些代码块中
      cacheGroups: {
        // 默认第三方缓存组
        defaultVendors: {
          // 控制此缓存组选择的模块，省略它会选择所有模块。它可以匹配绝对模块资源路径。
          // 如果某个模块资源的绝对路径匹配此正则的话，那么这个模块就可以被提供到此代码块中。
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          // 指定拆分前模块被多少个代码块共享的话才会提取到此代码块中
          minChunks: 2,
          // 一个模块可以属于多个缓存组 jquery
          // 优化将优先考虑具有更高 priority (优先级)的缓存组
          // 默认组的优先级为负，以允许自定义组获得更高的优先级（自定义组的默认值为 0）
          priority: -20
        }
      }
    }
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "index.html",
    //   chunks: ['main']
    // }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "page1.html",
      chunks: ['page1']
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "page2.html",
      chunks: ['page2']
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "page3.html",
      chunks: ['page3']
    }),
    new AssetsPlugin(),
    // new PreloadWebpackPlugin({
    //   rel: 'prefetch'
    // })
  ]
}