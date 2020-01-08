const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const config = require('./webpack.config.js')

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}
// 配置自定义启动项
webpackDevServer.addDevServerEntrypoints(config, options)
const complier = webpack(config)
const server = new webpackDevServer(complier, options)
server.listen(5000, 'localhost', () => {
  console.log('dev-server is listening 5000')
})