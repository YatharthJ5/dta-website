import Section, { Heading } from './Section'
import Reveal from './Reveal'
import { DEMO_MSG, waLink } from '../data/site'

// Add genuine, verified entries here when available. Nothing is shown as fact until then.
// Example shape: { title: '...', detail: '...' }
export const RESULTS: { title: string; detail: string }[] = []

export default function Results() {
  return (
    <Section id="results">
      <Heading title="Results and student achievements" />
      {RESULTS.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r) => (
            <Reveal key={r.title}><div className="rounded-2xl bg-white p-6"><h3 className="text-2xl font-semibold">{r.title}</h3><p className="mt-2">{r.detail}</p></div></Reveal>
          ))}
        </div>
      ) : (
        <Reveal className="rounded-2xl border-2 border-dashed border-gold-500/50 bg-cream-50 p-8 sm:p-10">
          <p className="max-w-2xl font-display text-2xl text-navy-900">Verified results and student achievements will be published here when they are available.</p>
          <p className="mt-3 max-w-2xl text-navy-800/80">Until then, the best way to judge our teaching is to see it. Attend a free demo class and meet the faculty.</p>
          <a href={waLink(DEMO_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-6">Book a Free Demo Class</a>
        </Reveal>
      )}
    </Section>
  )
}
