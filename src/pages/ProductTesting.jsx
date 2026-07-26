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
const accentBorder = {
  gold: 'border-gold/40 bg-gold/10',
  teal: 'border-teal/40 bg-teal/10',
  brick: 'border-brick/40 bg-brick/10',
}

export default function ProductTesting() {
  const { slug } = useParams()
  const product = getProduct(slug)
  if (!product || product.status !== 'testing') return <Navigate to="/" replace />

  return (
    <main>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16 text-center">
        <span className={`inline-block text-[10px] tracking-widest uppercase font-sign font-semibold px-3 py-1 rounded-sm border mb-5 ${accentBorder[product.accent]} ${accentText[product.accent]}`}>
          Testing · Closed Pilot
        </span>
        <p className={`font-sign text-xs tracking-[0.25em] uppercase ${accentText[product.accent]} mb-3`}>
          {product.system}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper leading-tight mb-4">
          {product.name}
        </h1>
        <p className="text-lg text-paper/70 mb-6 font-medium">{product.tagline}</p>
        <p className="text-paper/60 leading-relaxed max-w-xl mx-auto">{product.problem}</p>
      </section>

      {/* Where it stands */}
      <section className="border-t border-ink-border">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <p className="text-xs uppercase tracking-wider text-paper/40 mb-2 text-center">
            Where it stands today
          </p>
          <p className="text-paper/70 leading-relaxed text-center max-w-xl mx-auto">
            {product.solution}
          </p>
        </div>
      </section>

      {/* Features in testing */}
      <section className="border-t border-ink-border">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h2 className="font-display text-xl font-semibold text-paper mb-8 text-center">
            What's being tested
          </h2>
          <div className="space-y-5">
            {product.features.map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentText[product.accent]} bg-current`} />
                <div>
                  <h3 className="font-sign font-semibold text-paper mb-0.5">{f.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta access request */}
      <section id="demo" className="border-t border-ink-border">
        <div className="max-w-lg mx-auto px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-paper mb-2 text-center">
            {product.demoCta}
          </h2>
          <p className="text-sm text-paper/50 text-center mb-8">
            {product.name} is being tested with a small group of real academies right now.
            Tell us about yours and we'll reach out if there's a fit for the pilot.
          </p>
          <LeadForm
            product={product}
            ctaLabel={product.demoCta}
            statusValue="beta_request"
            accentClass={accentButton[product.accent]}
          />
        </div>
      </section>
    </main>
  )
}
