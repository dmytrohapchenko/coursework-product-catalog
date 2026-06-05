import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'

function CartIcon() {
  const { getTotalItems } = useCart()

  return (
    <Link className="cart-link" to="/cart">
      <span>Cart</span>
      <span className="cart-count">{getTotalItems()}</span>
    </Link>
  )
}

export default CartIcon
