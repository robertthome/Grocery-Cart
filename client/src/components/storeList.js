import React from 'react'
import axios from 'axios'
import StoreCard from './StoreCard'

export default function StoreList(props) {
  let allStores = props.stores
  return (
    <div>
      {allStores.map((store) => (
        <StoreCard key={`${store._id}`} store={store} />
      ))}
    </div>
  )
}
