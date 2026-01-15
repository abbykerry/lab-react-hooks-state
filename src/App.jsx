import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // controls dark mode
  const [darkMode, setDarkMode] = useState(false)

  // stores cart items
  const [cart, setCart] = useState([])

  // stores selected category
  const [category, setCategory] = useState('all')

  // add product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  // filter products based on category
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === category
        )

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark mode toggle */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category filter */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />

      {/* Cart */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App
