import React from 'react'
import FoodCardOne from './OriginalFoodCard'

export default function anotherFoodList(props) {
  const allFoods = props.food
  return (
    <div className="listings">
      {allFoods.map((food) => (
        <FoodCardOne key={`${food._id}`} food={food} />
      ))}
    </div>
  )
}
