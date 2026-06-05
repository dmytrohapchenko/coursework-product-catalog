import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'
import { getCategoryLabel } from '../data/categoryLabels.js'

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <main className="page">
        <section className="empty-cart">
          <h1>Cart is empty</h1>
          <p>
            Add computer peripherals from the PeriTech catalog to see them here.
          </p>
          <Link className="back-link" to="/">
            Back to catalog
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <header className="page-header cart-page-header">
        <div>
          <h1>Shopping Cart</h1>
          <p>Review selected PeriTech products before checkout.</p>
        </div>
        <Link className="back-link" to="/">
          Back to catalog
        </Link>
      </header>

      <section className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <span className="category-label">
                  {getCategoryLabel(item.category)}
                </span>
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)} per item</p>
              </div>

              <div className="quantity-controls">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>

              <strong className="cart-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </strong>

              <button
                className="remove-button"
                type="button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order summary</h2>
          <p>
            <span>Total items:</span>
            <strong>{getTotalItems()}</strong>
          </p>
          <p>
            <span>Total price:</span>
            <strong>${getTotalPrice().toFixed(2)}</strong>
          </p>
          <button className="clear-cart-button" type="button" onClick={clearCart}>
            Clear cart
          </button>
        </aside>
      </section>
    </main>
  )
}

export default CartPage
