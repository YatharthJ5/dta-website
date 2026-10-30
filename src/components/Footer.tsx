import { NAV, SITE, waLink } from '../data/site'
import logo from '../assets/dta-logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-navy-950 pb-24 pt-14 text-cream-100 sm:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3"><img src={logo} alt="" width="56" height="56" loading="lazy" className="h-14 w-14 rounded-full" /><div><p className="font-display text-2xl">{SITE.name} — {SITE.fullName}</p><p className="text-sm text-gold-400">{SITE.tagline}</p></div></div>
          <p className="mt-4 max-w-sm text-cream-100/70">Building knowledge, shaping character, creating futures.</p>
        </div>
        <nav aria-label="Footer"><p className="mb-3 font-semibold text-gold-400">Explore</p><ul className="space-y-2">{NAV.map((n) => <li key={n.href}><a className="text-cream-100/80 hover:text-white" href={n.href}>{n.label}</a></li>)}</ul></nav>
        <div className="space-y-2 text-cream-100/80">
          <p className="mb-3 font-semibold text-gold-400">Contact</p>
          <p>{SITE.address}</p>
          <p><a className="hover:text-white" href={`tel:${SITE.phonePrimaryTel}`}>{SITE.phonePrimary}</a> · <a className="hover:text-white" href={`tel:${SITE.phoneSecondaryTel}`}>{SITE.phoneSecondary}</a></p>
          <p><a className="break-all hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p><a className="hover:text-white" href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-cream-100/60 sm:px-8">© {new Date().getFullYear()} {SITE.name} — {SITE.fullName}. All rights reserved.</p>
    </footer>
  )
}
