import React from 'react'
import FoodCard from './FoodCard'

export default function FoodCardSelection(props) {
  let allFoods = props.foods
  return (
    <div>
      {props.foods ? (
        <div>
          {props.foods.map((food) => (
            <FoodCard key={`${food._id}`} foods={food} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
