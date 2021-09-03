import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globle'

function FoodCardOne(props) {
  const { food } = props
  return (
    axios.get(`${BASE_URL}/foods/${food._id}`),
    (
      <div className="food-card">
        <h3>{food.name}</h3>
        <img src={food.image} alt={food.name} />
        <p className="price">Price: {food.price}</p>
      </div>
    )
  )
}

export default FoodCardOne
