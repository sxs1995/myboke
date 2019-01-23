var mongoose = require('mongoose')
var Schema = mongoose.Schema;
//用户的表结构

module.exports = new mongoose.Schema({
    //标题
    title: String,
    // 类别
    category: {
        type:Schema.Types.ObjectId,
        ref:"category"
    },
    //预览图
    imgs: String,
    // 博客内容
    blogs: String,
    // 更新时间
    createAt: {
        type: Date,
        default: new Date().toLocaleDateString()
    }
})