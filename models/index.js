const mongoose = require('mongoose')
const StoresSchema = require('./store')
const FoodsSchema = require('./food')

const Store = mongoose.model('stores', StoresSchema)
const Food = mongoose.model('foods', FoodsSchema)

module.exports = {
  Food,
  Store
}
