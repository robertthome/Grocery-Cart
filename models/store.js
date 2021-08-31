const { Schema } = require('mongoose')

const Store = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Store
