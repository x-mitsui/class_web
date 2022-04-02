const path = require('path')
const config = {
  mode: 'development',
  devtool: 'cheap-source-map',

  devServer: {
    watchFiles: {
      paths: ['src/**/*'],
      options: {
        ignored: /node_modules/
      }
    },
    static: {
      directory: path.join(process.cwd(), 'public'), //提供静态服务的主体
      publicPath: '/public/' //提供静态服务的接口路径，或者可以说路由
    },

    host: 'localhost',
    port: 3300,
    hot: true
  },
  stats: {
    //   // preset: 'minimal',
    //   // moduleTrace: true,
    errorDetails: true
  }
}

module.exports = config
