/*
 * @Author: your name
 * @Date: 2019-12-31 14:42:05
 * @LastEditTime: 2020-06-17 15:34:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\webpack.prod.js
 */ 
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js', // [chunkhash]用于生成hash值，避免缓存
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [//加载从右往左
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8889,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    })
    // new webpack.DefinePlugin({ // 配置环境变量
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
  ],
  optimization: {
    minimizer: [
      // js压缩
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      // css压缩
      new OptimizeCssAssetsPlugin({})
    ]
  }
})