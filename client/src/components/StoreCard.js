import React from 'react'

function StoreCard(props) {
  const { store } = props
  return (
    <div className="store-card">
      <h3>{props.store.name}</h3>
      <img src={props.store.image} alt={props.store.name} />
    </div>
  )
}

export default StoreCard
