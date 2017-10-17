const path = require('path');
const config = require('config');
const root = path.resolve(__dirname, '..'); // 项目的根目录绝对路径
const webpack = require('webpack');
// const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.join(root, 'app/main.js'),  // 入口文件路径
  output: {
    path: path.join(root, '/build'),  // 出口目录
    publicPath: '/',    // 公共路径
    filename: 'app.js'  // 出口文件名
  },
  resolve: {
    alias: { // 配置目录别名
      // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
      config: path.join(root, 'config'),
      vue: 'vue/dist/vue.js'
    },
    extensions: ['.js', '.vue', '.json'] // 引用js和vue文件可以省略后缀名
  },
  module: { // 配置loader
    loaders: [
      {test: /\.vue$/, loader: 'vue-loader'}, // 所有.vue结尾的文件，使用vue-loader
      {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}, // vue-style-loader需要，但都包含在里面
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/} // .js文件使用babel-loader，切记排除node_modules目录
    ]
  },
  plugins: [
      new TransferWebpackPlugin([
          {from: 'html'},
      ], path.join(root, '/app')),
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname, '../app/index.html')
      })
  ]
};