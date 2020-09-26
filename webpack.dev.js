/*
 * @Author: your name
 * @Date: 2019-12-31 14:41:56
 * @LastEditTime: 2020-06-12 10:57:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\webpack.dev.js
 */ 
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const webpack = require('webpack')
console.log('development')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js', // [chunkhash]用于生成hash值，避免缓存
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [//加载从右往左
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',// 为各大浏览器加前缀
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loaders => [
                require('autoprefixer')({
                })
              ]
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map', // 是否可以代码寻错
  plugins: [
    new webpack.NamedModulesPlugin(), // 热更新时返回文件名而不是文件id
    new webpack.HotModuleReplacementPlugin(), // 模块热替换
    // new webpack.DefinePlugin({ // 配置环境变量
    //   'process.env.NODE_ENV': JSON.stringify('development')
    // })
  ],
  devServer: {
    clientLogLevel: 'warning',  // 输出日志级别
    hot: true, // 启动热更新
    contentBase: './dist',
    publicPath: '/', // 浏览器访问路径
    compress: true, // 启用gzip压缩
    port: 9998,
    open: true, // 自动调起浏览器
    overlay: { // 出现错误或警告是否覆盖页面线上错误信息
      warnings: true,
      errors: true
    },
    quiet: true,
    proxy: { // 代理
      '/api': {
        target: 'http://127.0.0.1:8888/',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': ''
        }
      }
    },
    watchOptions: { // 监控文件相关配置
      poll: true,
      ignored: /node_modules/,
      aggregateTimeout: 300  // 默认值, 当你连续改动时候, webpack可以设置构建延迟时间(防抖)
    }
  }
})
