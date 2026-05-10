import { useEffect, useState } from 'react'
import Loader from '../components/Loader.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { getCategoryLabel } from '../data/categoryLabels.js'
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
        <h1>Каталог PeriTech</h1>
        <p>
          Переглядайте комп'ютерну периферію, шукайте товари за назвою та
          фільтруйте їх за категорією.
        </p>
      </header>

      <section className="filters">
        <label>
          Пошук пристрою
          <input
            type="text"
            placeholder="Введіть назву пристрою..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </label>

        <label>
          Категорія
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {getCategoryLabel(category)}
              </option>
            ))}
          </select>
        </label>
      </section>

      <p className="result-count">
        Показано товарів PeriTech: {filteredProducts.length}
      </p>

      <section className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <p className="empty-message">
          За вашим запитом периферійних пристроїв не знайдено.
        </p>
      )}
    </main>
  )
}

export default ProductListPage
