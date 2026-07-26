import { useParams, Navigate } from 'react-router-dom'
import { getProduct } from '../data/products'
import LeadForm from '../components/LeadForm'

const accentButton = {
  gold: 'bg-gold text-ink hover:bg-gold/90',
  teal: 'bg-teal text-ink hover:bg-teal/90',
  brick: 'bg-brick text-paper hover:bg-brick/90',
}
const accentText = {
  gold: 'text-gold',
  teal: 'text-teal',
  brick: 'text-brick',
}

export default function ProductFlagship() {
  const { slug } = useParams()
  const product = getProduct(slug)
  if (!product || product.status !== 'live') return <Navigate to="/" replace />

  return (
    <main>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-teal" />
            <p className={`font-sign text-xs tracking-[0.25em] uppercase ${accentText[product.accent]}`}>
              {product.system} · Live
            </p>
          </div>
          {product.logo && (
            <img src={product.logo} alt={`${product.name} logo`} className="h-16 w-auto mb-4" />
          )}
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper leading-tight mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-paper/70 mb-2 font-medium">{product.tagline}</p>
          <p className="text-paper/60 leading-relaxed mb-8">{product.problem}</p>
          <a
            href={product.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-sign font-semibold rounded-sm px-6 py-3 transition-colors ${accentButton[product.accent]}`}
          >
            {product.demoCta} →
          </a>
        </div>
        <div className="signboard rounded-sm p-8">
          <span className="rivet" style={{ top: 10, left: 10 }} aria-hidden="true" />
          <span className="rivet" style={{ top: 10, right: 10 }} aria-hidden="true" />
          <span className="rivet" style={{ bottom: 10, left: 10 }} aria-hidden="true" />
          <span className="rivet" style={{ bottom: 10, right: 10 }} aria-hidden="true" />
          <p className="text-xs uppercase tracking-wider text-paper/40 mb-2">Built for</p>
          <p className="font-display text-2xl text-paper mb-6">{product.forWhom}</p>
          <p className="text-paper/60 leading-relaxed">{product.solution}</p>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-ink-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-paper mb-10">
            What it does
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {product.features.map((f, i) => (
              <div key={i} className="border-l-2 border-ink-border pl-5">
                <h3 className={`font-sign font-semibold ${accentText[product.accent]} mb-1`}>
                  {f.title}
                </h3>
                <p className="text-sm text-paper/60 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live CTA repeat + optional enquiry */}
      <section className="border-t border-ink-border">
        <div className="max-w-lg mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-2xl font-semibold text-paper mb-3">
            {product.name} is live and in real use.
          </h2>
          <p className="text-sm text-paper/50 mb-8">
            Visit the product directly, or leave your details if you'd rather we reach out first.
          </p>
          <a
            href={product.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-sign font-semibold rounded-sm px-6 py-3 mb-10 transition-colors ${accentButton[product.accent]}`}
          >
            {product.demoCta} →
          </a>
          <LeadForm
            product={product}
            ctaLabel="Ask us to reach out instead"
            statusValue="contact_request"
            accentClass="bg-ink-light border border-ink-border text-paper hover:border-gold"
          />
        </div>
      </section>
    </main>
  )
}
