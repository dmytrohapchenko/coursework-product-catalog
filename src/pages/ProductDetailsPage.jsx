import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader.jsx'
import { products } from '../data/products.js'

function ProductDetailsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const product = products.find((item) => item.id === Number(id))

  if (isLoading) {
    return <Loader />
  }

  if (!product) {
    return (
      <main className="page">
        <section className="not-found-box">
          <h1>Product not found</h1>
          <p>
            The product ID in the address does not match any product in the
            catalog.
          </p>
          <Link className="back-link" to="/">
            Back to products
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <Link className="back-link" to="/">
        Back to products
      </Link>

      <section className="details-layout">
        <img className="details-image" src={product.image} alt={product.name} />

        <div className="details-content">
          <span className="category-label">{product.category}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          <div className="details-info">
            <p>
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </p>
            <p>
              <strong>Rating:</strong> {product.rating} / 5
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Product ID:</strong> {product.id}
            </p>
          </div>

          <div className="details-note">
            <h2>Coursework note</h2>
            <p>
              This page uses React Router to read the product ID from the URL
              and display the matching item from mock data.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailsPage
