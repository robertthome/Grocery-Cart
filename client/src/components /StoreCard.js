import React from 'react'

function StoreCard(props) {
  const { store } = props
  return (
    <div className="store-card">
      <h3>{store.name}</h3>
      <img src={store.image} alt={store.name} />
    </div>
  )
}

export default StoreCard
