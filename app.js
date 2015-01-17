var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// 模板引擎（使用JADE）
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('x-powered-by', true);

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 根路由
app.use('/', require('./routes/index'));
app.use('/mongoDB', require('./routes/mongoDB'));

// 主动捕获404异常
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 异常处理
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
