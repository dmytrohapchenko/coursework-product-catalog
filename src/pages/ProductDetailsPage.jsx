import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader.jsx'
import { useCart } from '../context/useCart.js'
import { getCategoryLabel } from '../data/categoryLabels.js'
import { products } from '../data/products.js'

function ProductDetailsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { addToCart } = useCart()
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
          <h1>Товар не знайдено</h1>
          <p>
            ID товару в адресі не відповідає жодному периферійному пристрою в
            каталозі PeriTech.
          </p>
          <Link className="back-link" to="/">
            Назад до каталогу
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <Link className="back-link" to="/">
        Назад до каталогу
      </Link>

      <section className="details-layout">
        <img className="details-image" src={product.image} alt={product.name} />

        <div className="details-content">
          <span className="category-label">
            {getCategoryLabel(product.category)}
          </span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          <div className="details-info">
            <p>
              <strong>Ціна:</strong> ${product.price.toFixed(2)}
            </p>
            <p>
              <strong>Рейтинг:</strong> {product.rating} / 5
            </p>
            <p>
              <strong>Категорія:</strong> {getCategoryLabel(product.category)}
            </p>
            <p>
              <strong>ID товару:</strong> PT-{product.id}
            </p>
          </div>

          <button
            className="details-cart-button"
            type="button"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>

          <div className="details-note">
            <h2>Про товар</h2>
            <p>
              Цей товар PeriTech відображається з тестових даних каталогу.
              React Router зчитує ID товару з адреси сторінки та відкриває
              відповідну сторінку з деталями периферійного пристрою.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailsPage
