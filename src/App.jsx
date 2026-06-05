import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartIcon from './components/CartIcon.jsx'
import CartPage from './pages/CartPage.jsx'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import ProductListPage from './pages/ProductListPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <header className="site-header">
          <div className="site-header-inner">
            <div>
              <h1>PeriTech</h1>
              <p>
                Інтернет-магазин периферійних комп’ютерних пристроїв
              </p>
            </div>
            <CartIcon />
          </div>
        </header>

        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>

        <footer className="site-footer">
          <p>PeriTech coursework project by Dmytro Hapchenko</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
