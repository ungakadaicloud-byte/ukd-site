export default function Footer() {
  return (
    <footer className="border-t border-ink-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-sign font-semibold text-paper">UNGA KADAI DIGITAL</p>
          <p className="text-sm text-paper/50 mt-1">Digitize Your Business.</p>
        </div>
        <p className="text-xs text-paper/40">
          © {new Date().getFullYear()} UNGA KADAI DIGITAL. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
