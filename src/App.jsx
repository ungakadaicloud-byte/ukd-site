import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductFlagship from './pages/ProductFlagship'
import ProductTesting from './pages/ProductTesting'
import ProductDeveloping from './pages/ProductDeveloping'
import { products } from './data/products'

const templateFor = {
  live: ProductFlagship,
  testing: ProductTesting,
  developing: ProductDeveloping,
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ink font-body">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {products.map((p) => {
            const Template = templateFor[p.status]
            return <Route key={p.slug} path={`/${p.slug}`} element={<Template />} />
          })}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
