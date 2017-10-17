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
app.use(require('webpack-hot-middleware')(compiler));

app.listen(config.ports.development, function(err) {
	if (err) {
        console.error(err);
    } else {
        console.log('Webpack development server listening on port %s', config.ports.development);
    }
});