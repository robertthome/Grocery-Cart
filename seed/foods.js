const db = require('../db')
const Food = require('../models/food')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const foods = [
    {
      name: 'apple',
      image:
        'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '1.50',
      foodId: item1_id
    },
    {
      name: 'bread',
      image:
        'https://images.unsplash.com/photo-1598373182308-3270495d2f58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGJyZWFkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '2.50',
      foodId: item1_id
    }
  ]
  await Food.insertMany(foods)
  console.log('Lets go shopping')
}

const run = async () => {
  await main()
  db.close()
}

run()
