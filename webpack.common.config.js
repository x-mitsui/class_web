const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { merge } = require('webpack-merge')

const prodConfig = require('./webpack.prod.config')
const devConfig = require('./webpack.dev.config')

const commonConfig = (isProduction) => ({
  entry: {
    index: path.resolve(__dirname, './src/js/index.js'),
    list: path.resolve(__dirname, './src/js/list.js'),
    error: path.resolve(__dirname, './src/js/error.js')
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'js/[name].js',
    publicPath: '/sss/' //这里没效果，因为ejs中写死了
  },
  module: {
    rules: [
      {
        test: /\.js$/,

        use: {
          loader: 'babel-loader'
        },
        exclude: [path.resolve(__dirname, 'node_modules')]
      },

      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
            // options: {
            //   hmr: process.env.NODE_ENV === 'development'
            // }
          },

          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
            // options: {
            //   hmr: process.env.NODE_ENV === 'development'
            // }
          },

          'css-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/,
        // type: "asset/resource", file-loader的效果
        // type: "asset/inline", url-loader
        type: 'asset',
        generator: {
          filename: 'img/[name][ext]',
          publicPath: '../'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },

      {
        test: /\.(woff2?|eot|ttf|oft|svg)(\?.*)?$/i,

        type: 'asset/resource',
        generator: {
          filename: 'font/[name][ext]',
          // 设置导出的文件，url的前缀
          publicPath: '../'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
})

module.exports = function (env) {
  const isProduction = env.production
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  const config = isProduction ? prodConfig : devConfig
  const mergeConfig = merge(commonConfig(isProduction), config)

  return mergeConfig
}
