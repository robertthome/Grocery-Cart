import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globle'
import StoreCard from './StoreCard'

export default function StoreList(props) {
  const allStores = props.store
  return (
    <div>
      {allStores.map((store) => (
        <StoreCard key={`${store._id}`} store={store} />
      ))}
    </div>
  )

  // return <div className="food-list">{foodListings}</div>
}
