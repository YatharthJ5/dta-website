import { FACULTY } from '../data/site'
import Section, { Heading } from './Section'
import Reveal from './Reveal'
import aditya from '../assets/aditya-pandey.jpg'
import adarsh from '../assets/adarsh-pandey-sir.png'

// Keep each portrait mapped to its faculty profile.
const PHOTOS: Record<string, string> = { aditya, adarsh }

export default function Faculty() {
  return (
    <Section id="faculty">
      <Heading title="Meet the faculty" intro="Postgraduate teachers who explain concepts clearly and stay with the student until the doubt is solved." />
      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
        {FACULTY.map((f, i) => (
          <Reveal key={f.name} delay={i * 120}>
            <article className="group overflow-hidden rounded-2xl bg-navy-900 text-cream-100 shadow-[0_30px_50px_-30px_rgba(19,32,58,.6)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={PHOTOS[f.img]} alt={f.alt} width={f.img === 'adarsh' ? 768 : 928} height={f.img === 'adarsh' ? 790 : 1152} loading="lazy" style={{ objectPosition: f.pos }} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900 to-transparent" aria-hidden="true" />
                <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-sm font-semibold text-white">{f.subject}</span>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-medium">{f.name}</h3>
                <p className="mt-1 font-semibold text-gold-400">{f.role}</p>
                <dl className="mt-4 space-y-1 border-t border-white/15 pt-4 text-[15px] text-cream-100/85">
                  <div><dt className="sr-only">Qualification</dt><dd>{f.qualification}</dd></div>
                  <div><dt className="sr-only">Experience</dt><dd>{f.experience}</dd></div>
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
