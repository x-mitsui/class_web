const path = require('path')
const Uglify = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const { keys, bucket, localPath, zone } = require('./configs/qiniu')
const { QiniuUploadPlugin } = require('./webpackPlugin/qiniuUploadPlugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = {
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin(),
    new Uglify(),
    new OptimizeCssAssetsPlugin({}),

    new QiniuUploadPlugin({
      accessKey: keys.ak,
      secretKey: keys.sk,
      bucket: bucket.name,
      publicPath: path.resolve(process.cwd(), localPath),
      zone,
      cover: true
    })
  ]
}

module.exports = config
