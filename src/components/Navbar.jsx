import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-ink-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-sign font-bold text-lg tracking-tight text-paper">
            UNGA KADAI
          </span>
          <span className="text-gold font-sign font-bold text-lg">DIGITAL</span>
        </Link>
        {location.pathname !== '/' && (
          <Link
            to="/"
            className="text-sm font-medium text-paper/70 hover:text-gold transition-colors"
          >
            ← All products
          </Link>
        )}
      </div>
    </header>
  )
}
