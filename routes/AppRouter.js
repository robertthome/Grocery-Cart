const { Router } = require('express')
const controllers = require('../controllers/FoodController')
const router = Router()

router.get('/', (req, res) => res.send('hey they hi there ho there'))

router.post('./seed/foods', controllers.getAllFood)

module.exports = router
