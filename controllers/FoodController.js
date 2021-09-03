const { Food, Store } = require('../models')

const getStore = async (req, res) => {
  try {
    const stores = await Store.insertMany(req.body.stores)
    return res.status(201).json({ stores })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createStore = async (req, res) => {
  try {
    const store = await new Store.post(req.body)
    await store.save()
    return res.status(201).json({
      store
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllStores = async (req, res) => {
  try {
    const stores = await Store.find()
    return res.status(200).json({ stores })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const grabfood = async (req, res) => {
  try {
    const foods = await Food.insertMany(req.body.foods)
    return res.status(201).json({ foods })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createFood = async (req, res) => {
  try {
    const food = await new Food.post(req.body)
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

const DeleteFood = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await Food.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Food deleted')
    }
    throw new Error('Food not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createFood,
  getAllFood,
  grabfood,
  DeleteFood,
  getStore,
  createStore,
  getAllStores
}
