import { useEffect, useRef } from 'react'
import { DEMO_MSG, SITE, waLink } from '../data/site'
import Icon from './Icon'
import logo from '../assets/dta-logo.jpg'

export default function Hero() {
  const mark = useRef<HTMLDivElement>(null)

  // Subtle parallax on the emblem (skipped for reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (mark.current) mark.current.style.transform = `translate3d(0, ${Math.min(window.scrollY, 700) * 0.08}px, 0)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-8 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-6">
        <div className="relative z-10">
          <p className="hero-in mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-cream-50 px-4 py-1.5 text-sm font-medium text-navy-800" style={{ ['--d' as string]: '100ms' }}>
            <span className="h-2 w-2 rounded-full bg-gold-500" /> New batches begin on the 3rd of every month
          </p>
          <h1 className="hero-in text-[2.6rem] font-medium text-navy-900 sm:text-6xl lg:text-[4.4rem]" style={{ ['--d' as string]: '220ms' }}>
            Building Knowledge.<br />Shaping Character.<br />Creating Futures.
          </h1>
          <p className="hero-in mt-6 max-w-xl text-lg text-navy-800/85 sm:text-xl" style={{ ['--d' as string]: '380ms' }}>
            At Delhi Teaching Academy, we believe education goes beyond textbooks. We help students build knowledge, develop confidence and grow with strong values.
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ ['--d' as string]: '520ms' }}>
            <a href="#courses" className="btn btn-navy">Explore Our Courses</a>
            <a href="#contact" className="btn btn-gold">Enquire for Admission</a>
            <a href={waLink(DEMO_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-line text-navy-900">
              <Icon name="wa" className="h-5 w-5" /> Book a Free Demo Class
            </a>
          </div>
          <p className="hero-in mt-6 text-sm text-navy-700" style={{ ['--d' as string]: '640ms' }}>
            Offline classes at {SITE.address.split(',').slice(0, 3).join(',')}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[330px] sm:max-w-[420px] lg:max-w-[560px]">
          <div ref={mark} className="relative will-change-transform">
            <svg viewBox="0 0 100 100" className="absolute -inset-[5%] h-[110%] w-[110%]" aria-hidden="true">
              <circle cx="50" cy="50" r="49" fill="none" stroke="#c48a1a" strokeWidth=".35" pathLength={1} className="ring-draw" />
              <g className="ring-spin"><circle cx="50" cy="50" r="46.6" fill="none" stroke="#c48a1a" strokeWidth=".35" strokeDasharray="0.4 2.2" strokeLinecap="round" opacity=".7" /></g>
            </svg>
            <img src={logo} alt="D.T.A. Delhi Teaching Academy official logo — Learn Today, Lead Tomorrow" width="1254" height="1254" fetchPriority="high"
              className="hero-in relative w-full" style={{ ['--d' as string]: '300ms' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
