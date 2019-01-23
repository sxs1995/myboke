//引入express
const express = require("express");
//引入multer
const multer = require("multer");

var router = express.Router();

const fs = require('fs')
//统一返回格式
var reposneData;
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    reposneData = {
        code: "00000",
        message: "请求成功"
    };
    next();
});

//建立public文件夹，将HTML文件放入其中，允许访问
//router.use(express.static("public"));
//文件上传所需代码
//设置文件上传路径和文件命名
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //文件上传成功后会放入public下的upload文件夹
        cb(null, '././public/upload/')
    },
    filename: function (req, file, cb) {
        //设置文件的名字为其原本的名字，也可以添加其他字符，来区别相同文件，例如file.originalname+new Date().getTime();利用时间来区分
        const filenameArr = file.originalname.split('.');
        cb(null,new Date().getTime() + '.' + filenameArr[filenameArr.length-1]);
    }
});
var upload = multer({
    storage: storage
});


// # 判断目录是否存在，如果不存在就创建目录
// exists = fs.existsSync("D:/files/sps/shtml"); 
// if(!exists){
//   fs.mkdirSync("D:/files/sps/shtml");
// }
// # 将富文本写入html
// url = "D:/files/sps/shtml" + index + ".txt"  // index是文件名
// fs.writeFileSync(url, "<p>写入的富文本</p>")

router.post('/uploadtxt', function (req, res, next) {
    var txt = req.body.content;
    exists = fs.existsSync("././public/upload");
    if (!exists) {
        fs.mkdirSync("././public/upload");
    }
    var url = '././public/upload/index.txt';
    fs.writeFileSync(url, txt)
    reposneData.url = '/public/upload/index.txt';
    res.json(reposneData)
})

router.post('/readtxt', function (req, res, next) {
    var url = req.body.urls;
    fs.readFile('././' + url, 'utf-8', function (err, data) {
        if (err) {
            console.error(err);
        } else {
            reposneData.data = data
            res.json(reposneData)
        }
    });
})


//处理来自页面的ajax请求。single文件上传
router.post('/upload', upload.single('file'), function (req, res, next) {
    reposneData.code = '00000'
    reposneData.message = '请求成功'
    reposneData.file = req.file;
    res.json(reposneData)
});

module.exports = router;