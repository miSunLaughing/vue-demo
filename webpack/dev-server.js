const WebpackDevServer = require("webpack-dev-server");
const express = require('express');
const webpack = require("webpack");
const fs = require("fs");
const path = require('path');
const config = require('config');
// 引入配置文件
const configuration = require('./development.config.js');
const compiler = webpack(configuration);
const contentPath = path.join(__dirname,'../app/dist');

const serverOptions = {
    publicPath: '/',    // 将中间件绑定到服务器的路径  required
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true }
};
const app = new express();
app.use(express.static(path.join(__dirname,'../')));
app.use(require('webpack-dev-middleware')(compiler, serverOptions));


const hotMiddleware = require('webpack-hot-middleware')(compiler)
// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});
app.use(hotMiddleware);

app.listen(config.ports.development, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Webpack development server listening on port %s', config.ports.development);
    }
});

