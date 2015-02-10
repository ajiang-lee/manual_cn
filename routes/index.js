var router = require('express').Router();

/**
 * <b>描述：</b>根路由，返回首页
 * */
router.get('/', function(req, res) {
  res.render('index');
});

/**
 * <b>描述：</b>返回关于我们页面
 * */
router.get('/aboutUs', function(req, res) {
    res.render('aboutUs');
});

/**
 * <b>描述：</b>返回站点的更新记录页面
 * */
router.get('/history', function(req, res) {
    res.render('history');
});

module.exports = router;
