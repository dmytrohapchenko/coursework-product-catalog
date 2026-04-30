import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-card-body">
        <span className="category-label">{product.category}</span>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="product-meta">
          <strong>${product.price.toFixed(2)}</strong>
          <span>Rating: {product.rating}</span>
        </div>
        <Link className="details-link" to={`/products/${product.id}`}>
          View details
        </Link>
      </div>
    </article>
  )
}

export default ProductCard
