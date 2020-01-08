const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')
console.log(devMode, process.env.NODE_ENV)
module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js', // [chunkhash]用于生成hash值，避免缓存
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({// 将css打包成单独的css文件
      filename: devMode ? '[name].css' : '[name].[hash:5].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash:5].css'
    }), 
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