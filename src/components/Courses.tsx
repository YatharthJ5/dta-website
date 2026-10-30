import { COURSES, SITE, waLink } from '../data/site'
import Section, { Heading } from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

export default function Courses() {
  return (
    <Section id="courses" tone="light">
      <Heading title="Courses and programmes" intro="From school classes to competitive examinations — all taught offline at the academy. Fees and duration depend on the selected course or package." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {COURSES.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 80} className={`lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/60 hover:shadow-[0_24px_40px_-24px_rgba(19,32,58,.4)]">
              <div className="relative flex h-32 items-end justify-between overflow-hidden bg-navy-900 p-5">
                <svg className="absolute -right-6 -top-6 h-36 w-36 text-gold-500/25 transition-transform duration-700 group-hover:rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" aria-hidden="true">
                  <circle cx="50" cy="50" r="44" strokeWidth="1" /><circle cx="50" cy="50" r="30" strokeWidth="1" strokeDasharray="2 4" /><circle cx="50" cy="50" r="16" strokeWidth="1" />
                </svg>
                <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gold-500 text-white"><Icon name={c.icon} className="h-7 w-7" /></span>
                <span className="relative rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-cream-100">{c.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold text-navy-900">{c.name}</h3>
                <p className="mt-2 flex-1 text-[15px] text-navy-800/80">{c.desc}</p>
                <a href={waLink(`Hello D.T.A., I would like to know more about ${c.name}.`)} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-gold-500 hover:text-navy-900">
                  Enquire about this course <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-sm text-navy-800/70">Contact {SITE.name} for details on fees, duration and the next batch.</p>
    </Section>
  )
}
