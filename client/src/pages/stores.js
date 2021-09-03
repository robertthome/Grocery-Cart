import React from 'react'
import StoreCard from '../components/StoreCard'

function Listings(props) {
  const showStore = (store) => {
    props.history.push(`/listings/${store.id}`)
  }
  const storeListings = props.stores.map((store) => {
    return (
      <StoreCard
        key={`${store.id}${store.name}`}
        showStore={showStore}
        store={store}
      />
    )
  })

  return <div className="listings">{storeListings}</div>
}

export default Listings
