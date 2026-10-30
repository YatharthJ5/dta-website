import { useState } from 'react'
import { FAQ } from '../data/site'
import Section, { Heading } from './Section'
import Icon from './Icon'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Section id="faq" tone="light">
      <Heading title="Frequently asked questions" />
      <div className="mx-auto max-w-3xl divide-y divide-navy-900/15 border-y border-navy-900/15">
        {FAQ.map((f, n) => (
          <div key={f.q}>
            <h3>
              <button id={`faq-b-${n}`} aria-expanded={open === n} aria-controls={`faq-p-${n}`} onClick={() => setOpen(open === n ? null : n)}
                className="flex min-h-[56px] w-full items-center justify-between gap-4 py-5 text-left font-display text-xl font-medium text-navy-900 sm:text-2xl">
                {f.q}
                <span className={`shrink-0 text-gold-500 transition-transform duration-300 ${open === n ? 'rotate-45' : ''}`}><Icon name="plus" /></span>
              </button>
            </h3>
            <div id={`faq-p-${n}`} role="region" aria-labelledby={`faq-b-${n}`} className="acc" data-open={open === n}>
              <div><p className="pb-6 pr-10 text-lg text-navy-800/85">{f.a}</p></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
