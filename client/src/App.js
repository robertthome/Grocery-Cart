import React, { useState, useEffect } from 'react'
import './App.css'
import Nav from './components /Nav'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import { BASE_URL } from './globle'
import axios from 'axios'

function App() {
  const [food, setFood] = useState([])
  const [stores, setStores] = useState([])
  useEffect(() => {
    async function getFood() {
      let res = await axios.get(`${BASE_URL}`)
      setFood(res.data)
    }
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
      </Switch>
    </div>
  )
}

export default App
