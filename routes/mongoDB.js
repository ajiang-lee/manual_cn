var router = require('express').Router();

// 根路由
router.get('/', function(req, res, next) {
    res.render('mongoDB/index');
});

// 第一章：简介
router.get('/introduction(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_01/index', {
        section : req.params[0]
    });
});

// 第二章：安装 》目录
router.get('/install', function(req, res, next) {
    res.render('mongoDB/chapter_02/index');
});

// 第三章：CRUD 》目录
router.get('/crud', function(req, res, next) {
    res.render('mongoDB/chapter_03/index');
});

// 第三章：CRUD 》3.1：简介
router.get('/crud/introduction(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_03/31_introduction', {
        section : req.params[0]
    });
});

// 第三章：CRUD 》3.2.1：读操作
router.get('/crud/concept/read(/:section)?', function(req, res, next) {
     res.render('mongoDB/chapter_03/321_read', {
         section : req.params[0]
     });
});

// 第三章：CRUD 》3.2.2：写操作
router.get('/crud/concept/write(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_03/322_write', {
        section : req.params[0]
    });
});

// 第三章：CRUD 》3.3：指导教程
router.get('/crud/tutorial(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_03/33_tutorial', {
        section : req.params[0]
    });
});

// 第三章：CRUD 》3.4：参考资料
router.get('/crud/reference(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_03/34_reference', {
        section : req.params[0]
    });
});

// 第四章：数据模型 》目录
router.get('/model', function(req, res, next) {
    res.render('mongoDB/chapter_04/index');
});

// 第四章：数据模型 》4.1：简介
router.get('/model/introduction(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_04/41_introduction', {
        section : req.params[0]
    });
});

// 第四章：数据模型 》4.2：相关概念
router.get('/model/concept(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_04/42_concept', {
        section : req.params[0]
    });
});

// 第四章：数据模型 》4.3：示例
router.get('/model/example(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_04/43_example', {
        section : req.params[0]
    });
});

// 第四章：数据模型 》4.4：参考资料
router.get('/model/reference(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_04/44_reference', {
        section : req.params[0]
    });
});

// 第七章：聚合 》目录
router.get('/aggregation', function(req, res, next) {
    res.render('mongoDB/chapter_07/index');
});

// 第七章：聚合 》7.1：简介
router.get('/aggregation/introduction(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_07/71_introduction', {
        section : req.params[0]
    });
});

// 第七章：聚合 》7.2：相关概念
router.get('/aggregation/concept(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_07/72_concept', {
        section : req.params[0]
    });
});

// 第七章：聚合 》7.3：示例
router.get('/aggregation/example(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_07/73_example', {
        section : req.params[0]
    });
});

// 第七章：聚合 》7.4：参考资料
router.get('/aggregation/reference(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_07/74_reference', {
        section : req.params[0]
    });
});

// 第八章：索引 》目录
router.get('/index', function(req, res, next) {
    res.render('mongoDB/chapter_08/index');
});

// 第八章：索引 》8.1：简介
router.get('/index/introduction(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_08/81_introduction', {
        section : req.params[0]
    });
});

// 第八章：索引 》8.2：相关概念
router.get('/index/concept(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_08/82_concept', {
        section : req.params[0]
    });
});

// 第八章：索引 》8.3：指导教程
router.get('/index/tutorial(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_08/83_tutorial', {
        section : req.params[0]
    });
});

// 第八章：索引 》8.4：参考资料
router.get('/index/reference(/:section)?', function(req, res, next) {
    res.render('mongoDB/chapter_08/84_reference', {
        section : req.params[0]
    });
});

module.exports = router;