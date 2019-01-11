/*
 * @Author: shenxsh@inspurworld.com 
 * @Date: 2019-01-07 09:29:01 
 * @Last Modified by:   shenxsh@inspurworld.com 
 * @Last Modified time: 2019-01-07 09:29:01 
 */
var mongoose = require('mongoose')

//用户的表结构

module.exports = new mongoose.Schema({
    // 用户名
    username: String,
    // 密码
    password: String,
    // 是否是管理员
    isAdmin: {
        type: Boolean,
        default: false
    }
})