import React from 'react'
import StoreCard from './StoreCard'

export default function StoreList(props) {
  let allStores = props.stores
  return (
    <div>
      {props.stores ? (
        <div className="listings">
          {props.stores.map((store) => (
            <StoreCard key={`${store._id}`} store={store} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
