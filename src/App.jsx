import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductFlagship from './pages/ProductFlagship'
import ProductEarlyAccess from './pages/ProductEarlyAccess'
import { products } from './data/products'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ink font-body">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {products.map((p) => (
            <Route
              key={p.slug}
              path={`/${p.slug}`}
              element={p.status === 'live' ? <ProductFlagship /> : <ProductEarlyAccess />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
