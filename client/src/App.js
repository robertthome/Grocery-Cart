import React, { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import { BASE_URL } from './globle'
import axios from 'axios'
import FoodList from './components/foodList'
import StoreList from './components/storeList'

function App() {
  const [food, setFood] = useState([])
  const [stores, setStores] = useState({})

  useEffect(() => {
    async function getFood() {
      let res = await axios.get(`${BASE_URL}/foods`)
      setFood(res.data.foods)
    }
    async function getStores() {
      let res = await axios.get(`${BASE_URL}/store`)
      setStores(res.data.stores)
    }
    getStores()
    getFood()
    return <div></div>
  }, [])

  return (
    <div className="App black">
      <header className="App-header">
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/stores"
          component={(routerProps) => (
            <StoreList {...routerProps} stores={stores} />
          )}
        />
        <Route
          path="/checkout"
          component={(routerProps) => <FoodList {...routerProps} food={food} />}
        />
      </Switch>
    </div>
  )
}

export default App
