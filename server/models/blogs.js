var mongoose = require('mongoose')
var Blogs = require('../schemas/blogs')

module.exports = mongoose.model('Blogs', Blogs)