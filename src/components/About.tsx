import { SITE } from '../data/site'
import Section from './Section'
import Reveal from './Reveal'

const PILLARS = [
  { t: 'Academic learning', d: 'Clear teaching across school subjects and competitive exam syllabi.' },
  { t: 'Moral values', d: 'Ethics and discipline are part of how every class is run.' },
  { t: 'Healthy competition', d: 'Motivated batches that push each other to improve.' },
  { t: 'Intellectual growth', d: 'Training students to think, reason and solve problems.' },
]

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <div>
          <Reveal>
            <h2 className="text-4xl font-medium text-navy-900 sm:text-5xl">Education that builds the student, not only the score.</h2>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="mt-8 border-l-4 border-gold-500 pl-6 font-display text-2xl italic leading-snug text-navy-800 sm:text-3xl">
              We don’t only teach subjects. We teach moral ethics and help students strengthen their cognitive abilities.
            </blockquote>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-prose text-lg text-navy-800/85">
              {SITE.name} — {SITE.fullName} is a coaching institute in Karawal Nagar, Delhi. We teach school students of all classes and streams, and prepare aspirants for NEET, SSC, DSSSB and RRB examinations — in a disciplined classroom, in small offline batches of about 30 students.
            </p>
            <p className="mt-4 max-w-prose text-lg text-navy-800/85">
              Our aim is simple: help every student learn well, think clearly and grow with strong values.
            </p>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={120} className="rounded-2xl bg-navy-900 p-7 text-cream-100 sm:p-8">
            <p className="text-sm font-semibold text-gold-400">Director</p>
            <p className="mt-1 font-display text-3xl">{SITE.director}</p>
            <p className="mt-3 text-cream-100/75">Leads {SITE.name} and its focus on academic learning together with moral values and healthy competition.</p>
          </Reveal>
          <ul className="grid gap-px overflow-hidden rounded-2xl bg-navy-900/10 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <li key={p.t} className="bg-cream-50 p-6">
                <Reveal delay={i * 70}>
                  <h3 className="font-display text-xl font-semibold text-navy-900">{p.t}</h3>
                  <p className="mt-1 text-[15px] text-navy-800/80">{p.d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
