import { useEffect, useState } from 'react'
import Loader from '../components/Loader.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

function ProductListPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const categories = ['All', ...new Set(products.map((product) => product.category))]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <main className="page">
      <header className="page-header">
        <h1>Product Catalog</h1>
        <p>Browse products, search by name, and filter by category.</p>
      </header>

      <section className="filters">
        <label>
          Search product
          <input
            type="text"
            placeholder="Type a product name..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </label>

        <label>
          Category
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </section>

      <p className="result-count">Showing {filteredProducts.length} products</p>

      <section className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <p className="empty-message">No products match your search.</p>
      )}
    </main>
  )
}

export default ProductListPage
