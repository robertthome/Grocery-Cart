const mongoose = require('mongoose')
const StoresSchema = require('./store')

const Store = mongoose.model('stores', StoresSchema)

module.exports = { Store }
