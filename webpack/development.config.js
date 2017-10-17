const path = require('path');
const config = require('config');
const root = path.resolve(__dirname, '..');// 项目的根目录绝对路径
const webpack = require('webpack');
const filePath = path.join(root, 'app/main.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    `./webpack/dev-client`,
    filePath
  ],  // 入口文件路径
  output: {
    path: path.join(root, '../dist'),
    publicPath: '/',   //公共路径
    filename: 'app.js'  // 出口文件名
  },
  resolve: {
    alias: { // 配置目录别名
      // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
      config: path.join(root, 'config'),
      vue: 'vue/dist/vue.js'  // 解决template模块不能使用的问题，
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',    // 生成的文件名
        template: path.resolve(__dirname, '../app/index.html')  // 模板是app/index.html
    })
  ]
};