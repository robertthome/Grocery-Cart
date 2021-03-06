import React from 'react'
import FoodCard from './FoodCard'

export default function FoodList(props) {
  const allFoods = props.food
  return (
    <div className="listings">
      {allFoods.map((food) => (
        <FoodCard key={`${food._id}`} food={food} />
      ))}
    </div>
  )
}
