var express = require("express");
var router = express.Router();
var Category = require("../models/category");

//统一返回格式
var reposneData;
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //自定义中间件，设置跨域需要的响应头。
    reposneData = {
        code: "00000",
        message: "请求成功"
    };
    next();
});

/**
 * 查询分类
 */
router.post("/list", function (req, res) {
    var pagesize = parseInt(req.body.pagesize),
        page = parseInt(req.body.page),
        skips = (page - 1) * pagesize;
    Category.count().then(count => {
        /**
         * sort()   1升序   -1降序
         */
        Category.find()
            .sort({
                code: 1
            })
            .skip(skips)
            .limit(pagesize)
            .then(Category => {
                reposneData.code = "00000";
                reposneData.message = "请求成功";
                reposneData.rows = Category;
                reposneData.total = count;
                res.json(reposneData);
                return;
            })
            .catch(err => {
                console.log(err);
            });
    });
});

/**
 * 删除分类
 */

router.post("/delete", (req, res) => {
    var idArray = req.body.id;
    Category.find({
        _id: {
            $in: idArray
        }
    }).then(r => {
        if (r.length == 0) {
            reposneData.code = "00002";
            reposneData.message = "分类信息不存在";
            res.json(reposneData);
            return Promise.reject();
        } else {
            Category.remove({
                    _id: {
                        $in: idArray
                    }
                })
                .then(() => {
                    reposneData.code = "00000";
                    reposneData.message = "删除成功";
                    res.json(reposneData);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });
});

/**
 * 添加分类
 */
router.post("/add", function (req, res) {
    console.log(req.body);
    var name = req.body.name || "";
    var code = req.body.code;
    if (name == "" || code == "") {
        reposneData.code = "00001";
        reposneData.message = "不能为空";
        res.json(reposneData);
        return;
    }

    Category.findOne({
            name: name
        })
        .then(r => {
            if (r) {
                reposneData.code = "00002";
                reposneData.message = "分类已存在";
                res.json(reposneData);
                return;
            } else {
                const category = new Category({
                    name: name,
                    code: code
                });
                category
                    .save()
                    .then(() => {
                        reposneData.code = "00000";
                        reposneData.message = "提交成功";
                        res.json(reposneData);
                        return;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        })
        .catch(err => {
            console.log(err);
        });
});

/**
 * 编辑分类
 */
router.post("/edit", function (req, res) {
    // 获取要修改的分类的信息,并且用表单的形式展现出来
    var id = req.body.id,
        code = req.body.code,
        name = req.body.name;
    // 获取要修改的分类信息
    Category.findOne({
        _id: id
    }).then(category => {
        if (!category) {
            reposneData.code = "00002";
            reposneData.message = "分类信息不存在";
            res.json(reposneData);
            return Promise.reject();
        } else {
            Category.update({
                _id: id
            }, {
                code: code
            }, {
                name: name
            }).then(() => {
                reposneData.code = "00000";
                reposneData.message = "修改成功";
                res.json(reposneData);
            });
        }
    });
});

module.exports = router;