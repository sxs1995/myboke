var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser') // 加载body-parser用于处理前端传来的数据
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var app = express();
// 解析 application/json
// app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //自定义中间件，设置跨域需要的响应头。
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain); //运用跨域的中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/category', categoryRouter);

module.exports = app;