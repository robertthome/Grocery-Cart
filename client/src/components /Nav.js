import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>The Grocery Cart</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/stores">Stores</NavLink>
        <NavLink to="/food">Food</NavLink>
        <NavLink to="/checkout">checkout</NavLink>
      </div>
    </nav>
  )
}

export default Nav
