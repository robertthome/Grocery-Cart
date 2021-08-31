const db =  require('../db')
const Store = require('../models/store')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const stores = [
    {
      name: 'Food Mart',
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      location: "123 Lettuce Blv, SomeCity"
    }
  ]
  await Store.insertMany(stores)
  console.log("Creates some stores")
}

const run = async () => {
  await main()
  db.close()
}

run()