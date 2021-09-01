const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const routes = require('./routes/AppRouter')
const db = require('./db')
const foods = require('./models/food')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('This is root')
})

app.get('/foods', async (req, res) => {
  res.send(foods)
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
