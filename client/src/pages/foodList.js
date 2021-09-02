import React from 'react'
import FoodCard from '../components /FoodCard'

function Listings(props) {
  let showFood = (food) => {
    props.history.push(`/listings/${food._id}`)
  }
  const foodListings = props.foods.map((food) => {
    return (
      <FoodCard
        key={`${food._id$}${food.name}`}
        showFood={showFood}
        food={food}
      />
    )
  })
  return <div className="listing">{foodListings}</div>
}

export default Listings
