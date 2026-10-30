import { WHY } from '../data/site'
import Section, { Heading } from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

export default function Why() {
  return (
    <Section id="why" tone="navy">
      <Heading light title="Why students choose D.T.A." intro="A focused classroom, steady practice and teachers who care about both marks and mindset." />
      <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <div key={w.title} className="group bg-navy-900 p-7 transition-colors duration-300 hover:bg-navy-800">
            <Reveal delay={(i % 4) * 70}>
              <span className="text-gold-400 transition-transform duration-300 group-hover:-translate-y-1 inline-block"><Icon name={w.icon} className="h-9 w-9" /></span>
              <h3 className="mt-5 text-2xl font-medium">{w.title}</h3>
              <p className="mt-2 text-[15px] text-cream-100/70">{w.text}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  )
}
