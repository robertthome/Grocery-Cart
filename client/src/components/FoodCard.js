import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globle'

function FoodCard(props) {
  const { food } = props
  async function deleteFood() {
    let res = await axios.delete(`${BASE_URL}/delete/${food._id}`)
  }

  return (
    <div className="food-card">
      <h3>{food.name}</h3>
      <img src={food.image} alt={food.name} />
      <p>Price: {food.price}</p>
      <button value="delete" onClick={deleteFood}>
        Delete Item
      </button>
    </div>
  )
}

export default FoodCard
