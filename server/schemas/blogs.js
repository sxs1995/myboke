var mongoose = require('mongoose')
var Schema = mongoose.Schema;
//用户的表结构

module.exports = new mongoose.Schema({
    // 访问量
    pgview: Number,
    //标题
    title: String,
    // 类别
    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    //预览图
    imgs: String,
    // 博客内容
    blogs: String,
    // 更新时间
    createAt: {
        type: Date,
        default: Date.now()
    },
    markdown: String
})