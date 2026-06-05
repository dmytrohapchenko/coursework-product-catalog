import { useState } from 'react'
import { CartContext } from './useCart.js'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addToCart(product) {
    setCartItems((currentItems) => [...currentItems, product])
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  function clearCart() {
    setCartItems([])
  }

  function getTotalItems() {
    return cartItems.length
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
