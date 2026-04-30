import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import ProductListPage from './pages/ProductListPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <header className="site-header">
          <div>
            <h1>Product Catalog Coursework</h1>
            <p>
              A React application with product filtering and product details.
            </p>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>

        <footer className="site-footer">
          <p>Created by Dmytro Hapchenko</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
