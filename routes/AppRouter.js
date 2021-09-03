const { Router } = require('express')
const controllers = require('../controllers/FoodController')
const router = Router()

router.get('/', (req, res) => res.send('hey they hi there ho there'))

router.get('/foods', controllers.getAllFood)

router.get('/store', controllers.getStore)

router.post('/astore', controllers.getStore)

router.post('/afood', controllers.createFood)

router.post('/grab', controllers.grabfood)

router.delete('/delete/:id', controllers.DeleteFood)

module.exports = router
