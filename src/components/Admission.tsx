import { useState } from 'react'
import { DEMO_MSG, SITE, STEPS, waLink } from '../data/site'
import Section, { Heading } from './Section'
import Reveal from './Reveal'

export default function Admission() {
  const [i, setI] = useState(0)
  const s = STEPS[i]
  const cta =
    s.cta.href === 'demo' ? { href: waLink(DEMO_MSG), ext: true }
    : s.cta.href === 'tel' ? { href: `tel:${SITE.phonePrimaryTel}`, ext: false }
    : { href: s.cta.href, ext: false }

  return (
    <Section id="admission" tone="navy">
      <Heading light title="Your admission journey in four steps" intro="Select a step to see what happens." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <ol className="relative space-y-3" role="tablist" aria-label="Admission steps">
          {STEPS.map((st, n) => (
            <li key={st.title}>
              <button role="tab" aria-selected={n === i} aria-controls="step-panel" onClick={() => setI(n)}
                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${n === i ? 'border-gold-500 bg-white/10' : 'border-white/10 hover:border-white/30'}`}>
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-xl transition-colors ${n <= i ? 'bg-gold-500 text-white' : 'bg-white/10 text-cream-100'}`}>{n + 1}</span>
                <span className="font-display text-xl sm:text-2xl">{st.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <Reveal>
          <div id="step-panel" role="tabpanel" key={i} className="rounded-2xl bg-cream-100 p-8 text-navy-900 sm:p-10" style={{ animation: 'rise .5s ease both' }}>
            <p className="font-semibold text-gold-500">Step {i + 1} of {STEPS.length}</p>
            <h3 className="mt-2 text-3xl font-medium sm:text-4xl">{s.title}</h3>
            <p className="mt-4 text-lg text-navy-800/85">{s.text}</p>
            <a href={cta.href} {...(cta.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="btn btn-navy mt-7">{s.cta.label}</a>
            <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-navy-900/10"><div className="h-full bg-gold-500 transition-all duration-500" style={{ width: `${((i + 1) / STEPS.length) * 100}%` }} /></div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
