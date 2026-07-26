import { Link } from 'react-router-dom'

const accentMap = {
  gold: { text: 'text-gold', border: 'border-gold/40', bg: 'bg-gold/10' },
  teal: { text: 'text-teal', border: 'border-teal/40', bg: 'bg-teal/10' },
  brick: { text: 'text-brick', border: 'border-brick/40', bg: 'bg-brick/10' },
}

const statusBadge = {
  live: { label: 'Live', text: 'text-teal', border: 'border-teal/40', bg: 'bg-teal/10' },
  testing: { label: 'Testing', text: 'text-gold', border: 'border-gold/40', bg: 'bg-gold/10' },
  developing: { label: 'In Development', text: 'text-paper/60', border: 'border-paper/20', bg: 'bg-paper/5' },
}

const linkText = {
  live: 'Visit product',
  testing: 'See what\'s being tested',
  developing: 'Learn more',
}

export default function SignboardCard({ product }) {
  const accent = accentMap[product.accent]
  const badge = statusBadge[product.status]
  return (
    <div className="flex flex-col items-center">
      <div className="chain" aria-hidden="true" />
      <Link
        to={`/${product.slug}`}
        className={`signboard group relative w-full rounded-sm px-6 pt-8 pb-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40`}
      >
        <span className="rivet" style={{ top: 10, left: 10 }} aria-hidden="true" />
        <span className="rivet" style={{ top: 10, right: 10 }} aria-hidden="true" />
        <span className="rivet" style={{ bottom: 10, left: 10 }} aria-hidden="true" />
        <span className="rivet" style={{ bottom: 10, right: 10 }} aria-hidden="true" />

        <span className={`absolute -top-3 left-6 text-[10px] tracking-widest uppercase font-sign font-semibold px-2 py-1 rounded-sm ${badge.bg} ${badge.text} border ${badge.border}`}>
          {badge.label}
        </span>

        <p className={`font-sign text-xs tracking-[0.2em] uppercase ${accent.text} mb-2`}>
          {product.system}
        </p>
        <h3 className="font-display text-2xl font-semibold text-paper mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-paper/60 mb-6 leading-relaxed min-h-[40px]">
          {product.forWhom}
        </p>
        <span className={`inline-flex items-center gap-1 text-sm font-medium ${accent.text}`}>
          {linkText[product.status]}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </Link>
    </div>
  )
}
