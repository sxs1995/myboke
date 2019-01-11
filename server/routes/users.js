var express = require('express');
var router = express.Router();
var User = require('../models/user')
var Category = require('../models/category')

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
 * 登录
 */
router.post('/login', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (username == '' || password == "") {
    reposneData.code = '00001';
    reposneData.message = '用户名和密码不能为空';
    res.json(reposneData);
    return;
  }

  // 查询数据库中相同用户名和密码的记录是否存在
  User.findOne({
    username: username,
    password: password
  }).then(r => {
    if (!r) {
      reposneData.code = '00002'
      reposneData.message = '用户名或密码错误'
      res.json(reposneData)
      return;
    }
    reposneData.code = '00000'
    reposneData.message = '登录成功'
    reposneData.userInfo = {
      _id: r._id,
      username: r.username
    }
    res.json(reposneData)
    return;
  })
})

module.exports = router;