import { useEffect, useState } from 'react'
import { INSTAGRAM_LINK, NAV, SITE } from '../data/site'
import Icon from './Icon'
import logo from '../assets/dta-logo.jpg'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      setScrolled(h.scrollTop > 24)
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? h.scrollTop / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-cream-100 shadow-[0_1px_0_rgba(19,32,58,.1)]' : 'bg-transparent'}`}>
      <div className="absolute inset-x-0 top-0 h-[3px] bg-transparent" aria-hidden="true">
        <div className="h-full origin-left bg-gold-500" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="D.T.A. — Delhi Teaching Academy, home">
          <img src={logo} alt="" width="48" height="48" className="h-11 w-11 sm:h-12 sm:w-12" />
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold text-navy-900">{SITE.name}</span>
            <span className="block text-[11px] font-medium tracking-wide text-navy-700 sm:text-xs">{SITE.fullName}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 lg:flex xl:gap-6" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="group relative py-1 text-[13px] font-medium text-navy-900 xl:text-[15px]">
              {n.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Follow D.T.A. on Instagram" title="Instagram"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-navy-900 transition-colors hover:bg-cream-200/70 hover:text-gold-500">
            <Icon name="instagram" className="h-5 w-5" />
          </a>
          <a href="#contact" className="btn btn-navy !min-h-[42px] !px-3 xl:!px-5">Enquire Now</a>
        </nav>

        <button className="grid h-12 w-12 place-items-center rounded-full text-navy-900 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      <div id="mobile-menu" className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-navy-900 transition-all duration-300 sm:top-20 ${open ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0 -translate-y-2'}`}>
        <nav className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-8" aria-label="Mobile">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              className={`border-b border-white/10 py-4 font-display text-2xl text-cream-100 transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
              {n.label}
            </a>
          ))}
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-12 items-center gap-3 self-start rounded-full border border-gold-400/50 px-5 font-semibold text-cream-100 transition-colors hover:bg-white/10">
            <Icon name="instagram" className="h-5 w-5 text-gold-400" /> Follow D.T.A. on Instagram
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-gold mt-8">Enquire for Admission</a>
        </nav>
      </div>
    </header>
  )
}
