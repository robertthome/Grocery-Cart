const mongoose = require('mongoose')
require('dotenv').config()

// const MONGODB_URI = process.env.MONGODB_URI
let dbUrl = process.env.MONGODB_URI

mongoose
  .connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
