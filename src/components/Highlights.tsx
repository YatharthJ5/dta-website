import { HIGHLIGHTS } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Highlights() {
  return (
    <section aria-label="Highlights" className="border-y border-navy-900/10 bg-cream-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.title} delay={(i % 4) * 70} className="group flex items-start gap-4 border-b border-navy-900/10 py-7 sm:px-5 lg:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-400 transition-transform duration-300 group-hover:scale-110"><Icon name={h.icon} /></span>
            <div>
              <h3 className="font-display text-xl font-semibold text-navy-900">{h.title}</h3>
              <p className="mt-1 text-[15px] text-navy-800/80">{h.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
