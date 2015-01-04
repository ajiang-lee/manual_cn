var router = require('express').Router();

/**
 * <b>描述：</b>根路由，返回首页
 * */
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
