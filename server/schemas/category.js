/*
 * @Author: shenxsh@inspurworld.com 
 * @Date: 2019-01-04 14:12:28 
 * @Last Modified by: shenxsh@inspurworld.com
 * @Last Modified time: 2019-01-07 10:46:47
 */
var mongoose = require('mongoose')

//用户的表结构

module.exports = new mongoose.Schema({
    code: Number,
    // 用户名
    name: String
})