import React from 'react'
import axios from 'axios'

function FoodCard(props) {
  const { food } = props
  return (
    <div className="food-card">
      <h3>{food.name}</h3>
      <img src={food.image} alt={food.name} />
      <p className="price">Price: {food.price}</p>
    </div>
  )
}

export default FoodCard
