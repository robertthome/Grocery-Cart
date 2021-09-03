import React from 'react'
import axios from 'axios'
import FoodCard from './FoodCard'

export default function FoodList(props) {
  const allFoods = props.food
  return (
    <div>
      {allFoods.map((food) => (
        <FoodCard key={`${food._id}`} food={food} />
      ))}
    </div>
  )
}
