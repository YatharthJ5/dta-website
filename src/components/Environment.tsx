import { ENV } from '../data/environment'
import Section, { Heading } from './Section'
import Reveal from './Reveal'

function Art({ kind }: { kind: string }) {
  const s = { fill: 'none', stroke: '#c48a1a', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect width="200" height="120" fill="#13203a" />
      {kind === 'class' && (<g {...s}><rect x="40" y="22" width="120" height="48" rx="3" /><path d="M56 40h60M56 52h38" /><path d="M50 100h24M88 100h24M126 100h24M62 100V86h0M100 100V86M138 100V86" /><circle cx="62" cy="82" r="5" /><circle cx="100" cy="82" r="5" /><circle cx="138" cy="82" r="5" /></g>)}
      {kind === 'lab' && (<g {...s}><path d="M85 20h30M92 20v28L68 94a6 6 0 0 0 5 9h54a6 6 0 0 0 5-9l-24-46V20" /><path d="M76 78h48" /><circle cx="150" cy="40" r="4" /><circle cx="48" cy="52" r="3" /><circle cx="158" cy="62" r="2.5" /></g>)}
      {kind === 'test' && (<g {...s}><rect x="62" y="16" width="76" height="92" rx="4" /><path d="M76 40l6 6 11-12M76 66l6 6 11-12M102 40h24M102 66h24M76 90h50" /></g>)}
    </svg>
  )
}

export default function Environment() {
  return (
    <Section id="environment" tone="light">
      <Heading title="How learning feels at D.T.A." intro="A quiet, structured classroom where students are expected to work hard and are supported while they do." />
      <div className="grid gap-6 md:grid-cols-3">
        {ENV.map((e, i) => (
          <Reveal key={e.title} delay={i * 100}>
            <figure className="group overflow-hidden rounded-2xl border border-navy-900/10 bg-white">
              <div className="aspect-[5/3] overflow-hidden">
                {e.image ? <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover" /> : <div className="h-full transition-transform duration-700 group-hover:scale-105"><Art kind={e.art} /></div>}
              </div>
              <figcaption className="p-6">
                <h3 className="text-2xl font-semibold text-navy-900">{e.title}</h3>
                <p className="mt-2 text-[15px] text-navy-800/80">{e.text}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-navy-800/70">Illustrations shown here are not photographs of the academy.</p>
    </Section>
  )
}
