import type { ReactNode } from 'react'
import Reveal from './Reveal'

export function Heading({ title, intro, light = false, center = false }: { title: string; intro?: string; light?: boolean; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2 className={`text-4xl font-medium sm:text-5xl ${light ? 'text-cream-100' : 'text-navy-900'}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg ${light ? 'text-cream-100/75' : 'text-navy-800/80'}`}>{intro}</p>}
    </Reveal>
  )
}

export default function Section({ id, children, tone = 'cream' }: { id: string; children: ReactNode; tone?: 'cream' | 'light' | 'navy' }) {
  const bg = tone === 'navy' ? 'bg-navy-900 text-cream-100' : tone === 'light' ? 'bg-cream-50' : 'bg-cream-100'
  return (
    <section id={id} className={`${bg} py-20 sm:py-28`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  )
}
