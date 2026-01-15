import React from 'react'

const Cart = ({ cartItems }) => {
  if (cartItems.length === 0) return null

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} is in your cart.
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart

