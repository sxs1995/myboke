var mongoose = require('mongoose')
var CategoriesSchema = require('../schemas/category')

module.exports = mongoose.model('Category', CategoriesSchema)