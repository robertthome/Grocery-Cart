import React from 'react'
import StoreCard from './StoreCard'

export default function StoreList(props) {
  let allStores = props.stores
  return (
    <div>
      {allStores.map((stores) => (
        <StoreCard key={`${stores._id}`} stores={stores} />
      ))}
    </div>
  )
}

// export default function StoreList(props) {
//   return (
//     <div className="stores-tab">
//       <div className="store-display">
//         <h3 className="store-name">Food 4 Mart</h3>
//         <img src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
//       </div>
//       <div className="store-display">
//         <h3 className="store-name">Food 4 Less .</h3>
//         <img src="https://images.unsplash.com/photo-1601599963565-b7ba29c8e3ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
//       </div>
//       <div className="store-display">
//         <h3 className="store-name">Pay N Save .</h3>
//         <img src="https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>
//       </div>
//     </div>
//   )
// }
