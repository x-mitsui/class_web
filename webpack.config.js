const path = require('path')
const Uglify = require('uglifyjs-webpack-plugin')
const Autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const config = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: {
    index: path.resolve(__dirname, './src/js/index.js'),
    list: path.resolve(__dirname, './src/js/list.js'),
    error: path.resolve(__dirname, './src/js/error.js')
  },
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: 'js/[name].js',
    publicPath: '/'
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },

          'css-loader',

          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
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
          filename: 'img/[name].[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },

      {
        test: /\.(woff2?|eot|ttf|oft|svg)(\?.*)?$/i,

        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]'
        }
      }
    ]
  },

  plugins: [
    new Uglify(),
    new OptimizeCssAssetsPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],

  devServer: {
    watchFiles: {
      paths: ['src/**/*'],
      options: {
        ignored: /node_modules/
      }
    },
    // static:path.resolve(__dirname,"app/public/"),
    host: 'localhost',
    port: 3300
  },
  stats: {
    // preset: 'minimal',
    // moduleTrace: true,
    errorDetails: true
  }
}

module.exports = config
