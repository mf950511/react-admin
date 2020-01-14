const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 用于worker缓存，处理网络链接错误
// const WorkboxPlugin = require('workbox-webpack-plugin')
// console.log(WorkboxPlugin)
// "workbox-webpack-plugin": "^4.3.1"
module.exports = {
  entry: {
    app: './index.tsx'
    // app: './src/index.js',
    // test: './src/test.js',
    // types: './src/first_ts.ts'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name]-[hash:5].[ext]',
              outputPath: 'img/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 文件大小小于limit参数，url-loader将会把文件转为DataUR
              limit: 10000,
              name: '[name]-[hash:5].[ext]',
              ourput: 'fonts/'
            }
          }
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader'],
        exclude: /node-modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, // 所有js脚本放于body之后
      hash: true, // 为静态资源生成hash，用于清楚缓存
      cache: true, // 仅在文件被更改时发出文件
      title: 'react admin',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      minify: {
        collapseWhitespace: true, // 折叠空白
        removeComments: true, // 删除注释
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new CleanWebpackPlugin(),
    // new WorkboxPlugin.GenerateSW({ // 静态服务，用于支持worker的浏览器在服务挂了之后继续访问
    //   clientsClaim: true,
    //   skipWaiting: true
    // })
  ],
  optimization: { // 公共代码抽离
    splitChunks:{ //启动代码分割，有默认配置项
      chunks: 'all'
    }
  }
}