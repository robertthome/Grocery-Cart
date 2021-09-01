const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Food = new Schema(
  {
    name: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: String, require: true }
    // id: { type: Schema.Types.ObjectId, required: true }
  },
  { timestamps: true }
)

module.exports = Food
