import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'
import { getCategoryLabel } from '../data/categoryLabels.js'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-card-body">
        <span className="category-label">
          {getCategoryLabel(product.category)}
        </span>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="product-meta">
          <strong>${product.price.toFixed(2)}</strong>
          <span>Рейтинг: {product.rating} / 5</span>
        </div>
        <div className="product-card-actions">
          <Link className="details-link" to={`/products/${product.id}`}>
            Детальніше
          </Link>
          <button
            className="add-to-cart-button"
            type="button"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
