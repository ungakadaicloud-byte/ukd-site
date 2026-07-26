import { products } from '../data/products'
import SignboardCard from '../components/SignboardCard'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center relative">
          <p className="font-sign text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Unga Kadai · உங்க கடை
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-paper leading-[1.1] mb-6">
            Every business has a shopfront.
            <br />
            <span className="text-gold">We build the one behind the counter.</span>
          </h1>
          <p className="text-paper/60 text-lg max-w-2xl mx-auto leading-relaxed">
            UNGA KADAI DIGITAL builds Tamil-first operating systems for the people who run
            Tamil Nadu's local businesses and public work — mechanics, advocates, doctors,
            candidates, and seva centres.
          </p>
        </div>
      </section>

      {/* Signboard row */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {products.map((product) => (
            <SignboardCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Why UNGA KADAI */}
      <section className="border-t border-ink-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl font-semibold text-paper mb-6 text-center">
            Digitize Your Business.
          </h2>
          <p className="text-paper/60 text-center leading-relaxed max-w-2xl mx-auto">
            Every product carries the same rule: Tamil first, voice where it helps, and a
            trial that never holds back a real feature. One shop, one system — built to work
            the way you already work.
          </p>
        </div>
      </section>
    </main>
  )
}
