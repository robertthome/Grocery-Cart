const Food = require('../models/food')

const createFood = async (req, res) => {
  try {
    const food = await new Food(req.body)
    await food.save()
    return res.status(201).json({
      food
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find()
    return res.status(200).json({ foods })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createFood,
  getAllFood
  // DeleteFood
}
