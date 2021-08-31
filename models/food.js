const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Food = new Schema(
  {
    food_id: { type: Object, required: true },
    name: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: String, require: true },
    store_id: {
      type:Schema.Types.ObjectId,
      ref:'store_id'
    }
  },
  { timestamps: true }
)

module.exports = Food
