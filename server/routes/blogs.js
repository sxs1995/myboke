var express = require('express');
var router = express.Router();
var Blogs = require('../models/blogs')
var Category = require("../models/category");
var path = require('path');
const fs = require('fs')

//统一返回格式
var reposneData;
router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //自定义中间件，设置跨域需要的响应头。
    reposneData = {
        code: "00000",
        message: "请求成功"
    };
    next();
});

/** 
 * 发布博客
 */
router.post('/addblogs', function (req, res) {
    console.log(req.body.category)
    let title = req.body.title || '';
    let category = req.body.category || '';
    let imgs = req.body.imgs || '';
    let blogs = req.body.blogs || '';
    let markdown = req.body.markdown || '';
    /** 
     * 将博客存为txt文档将地址存到数据库
     */
    // exists = fs.existsSync(path.join(__dirname, "../public/upload"));
    // if (!exists) {
    //     fs.mkdirSync(path.join(__dirname, "../public/upload"));
    // }
    // var textname = new Date().getTime() + '.txt';
    // var url = path.join(__dirname, "../public/upload/") + textname;
    // fs.writeFileSync(url, blogs)
    // reposneData.url = "/public/upload/" + textname;
    /*************************************************/
    if (title === '') {
        reposneData.code = "00001";
        reposneData.message = "标题不能为空";
        res.json(reposneData);
        return;
    } else if (category === '') {
        reposneData.code = "00002";
        reposneData.message = "类别不能为空";
        res.json(reposneData);
        return;
    } else if (blogs === '') {
        reposneData.code = "00003";
        reposneData.message = "内容不能为空";
        res.json(reposneData);
        return;
    } else {
        const Blog = new Blogs({
            title: title,
            category: category,
            imgs: imgs,
            pgview: 0,
            markdown: markdown,
            // blogs: reposneData.url, //将文档地址存到数据库里
            blogs: blogs //直接将博客内容存到数据库
        });
        Blog
            .save()
            .then(() => {
                reposneData.code = "00000";
                reposneData.message = "发布成功";
                res.json(reposneData);
                return;
            })
            .catch(err => {
                console.log(err);
            });
    }
})

/** 
 * 编辑博客
 */
router.post('/editblogs', function (req, res) {
    let id = req.body.id;
    let title = req.body.title || '';
    let category = req.body.category || '';
    let imgs = req.body.imgs || '';
    let blogs = req.body.blogs || '';
    let markdown = req.body.markdown || '';
    if (title === '') {
        reposneData.code = "00001";
        reposneData.message = "标题不能为空";
        res.json(reposneData);
        return;
    } else if (category === '') {
        reposneData.code = "00002";
        reposneData.message = "类别不能为空";
        res.json(reposneData);
        return;
    } else if (blogs === '') {
        reposneData.code = "00003";
        reposneData.message = "内容不能为空";
        res.json(reposneData);
        return;
    } else {
        Blogs.findOne({
            _id: id
        }).then(blog => {
            console.log(blog)
            if (!blog) {
                reposneData.code = "00002";
                reposneData.message = "分类信息不存在";
                res.json(reposneData);
                return Promise.reject();
            } else {
                Blogs.update({
                    _id: id
                }, {
                    title: title,
                    category: category,
                    imgs: imgs,
                    blogs: blogs,
                    markdown: markdown
                }).then((r) => {
                    console.log(r)
                    reposneData.code = "00000";
                    reposneData.message = "修改成功";
                    res.json(reposneData);
                }).catch(err=>{
                    console.log(err)
                })
            }
        });
    }
})



/** 
 * 根据id查询博客详情
 */
router.post('/getDetail', function (req, res) {
    console.log(req.body.id)
    let id = req.body.id
    Blogs.findOne({
        _id: id
    }).populate('category').then((r) => {
        console.log(r)
        if (!r) {
            reposneData.code = "00001";
            reposneData.message = "博客不存在";
            res.json(reposneData);
            return;
        } else {
            console.log(r.pgview + 1)
            Blogs.update({
                _id: id
            }, {
                pgview: r.pgview + 1
            }).then(() => {
                reposneData.code = '00000';
                reposneData.message = "请求成功";
                reposneData.rows = r;
                res.json(reposneData)
                /** 
                 * 根据数据库存储文件名读取博客内容
                 */
                // fs.readFile(path.join(__dirname, "../") + r.blogs, 'utf-8', function (err, data) {
                //     if (err) {
                //         console.error(err);
                //     } else {
                //         reposneData.rows.blogs = data;
                //         res.json(reposneData)
                //     }
                // });
            })
        }
    })
})

/** 
 * 删除博客
 */
router.post("/deleteBlogs", (req, res) => {
    var idArray = req.body.id;
    Blogs.find({
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
            Blogs.remove({
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
 * 查询博客列表
 */
router.post('/getBlogsList', function (req, res) {
    var pagesize = parseInt(req.body.pagesize),
        page = parseInt(req.body.page),
        skips = (page - 1) * pagesize;
    Blogs.count().then(count => {
        Blogs.find()
            .populate('category')
            .sort({
                _id: 1
            })
            .skip(skips)
            .limit(pagesize)
            .then(blogs => {
                reposneData.rows = blogs;
                reposneData.total = count;
                res.json(reposneData);
                return;
            })
            .catch(err => {
                console.log(err);
            });
    });
})

/** 
 * 根据分类查询博客列表
 */
router.post('/getBlogsListByCy', function (req, res) {
    var pagesize = parseInt(req.body.pagesize),
        page = parseInt(req.body.page),
        skips = (page - 1) * pagesize;
    Blogs.find({
            category: '5c45398fdf111b5b60ab7c2e'
        })
        .populate('category')
        .sort({
            _id: 1
        })
        .skip(skips)
        .limit(pagesize)
        .then(blogs => {
            reposneData.rows = blogs;
        })
        .catch(err => {
            console.log(err);
        });
    Blogs.find({
        category: '5c45398fdf111b5b60ab7c2e'
    }).count().then(count => {
        reposneData.total = count;
    }).then(() => {
        res.json(reposneData);
        return;
    })
})



module.exports = router;