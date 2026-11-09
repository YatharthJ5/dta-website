import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { DEMO_MSG, INSTAGRAM_LINK, MAPS_EMBED_LINK, MAPS_LINK, SITE, waLink } from '../data/site'
import Section, { Heading } from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

const OPTIONS = ['School Education – Class 1 to 5', 'School Education – Class 6 to 8', 'School Education – Class 9 to 10', 'School Education – Class 11 to 12', 'NEET Preparation', 'SSC Preparation', `${SITE.dsssbLabel} Preparation`, 'RRB Preparation', 'Not sure yet']

function Row({ icon, label, href, children, ext }: { icon: string; label: string; href?: string; children: ReactNode; ext?: boolean }) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-400"><Icon name={icon} className="h-5 w-5" /></span>
      <span className="min-w-0"><span className="block text-sm font-semibold text-gold-500">{label}</span><span className="block break-all text-lg text-navy-900 sm:break-words">{children}</span></span>
    </>
  )
  return href
    ? <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-cream-200/60">{inner}</a>
    : <div className="flex items-center gap-4 p-2">{inner}</div>
}

export default function Contact() {
  const [err, setErr] = useState('')
  const [sent, setSent] = useState(false)

  const build = (f: FormData) => {
    const g = (k: string) => String(f.get(k) ?? '').trim()
    return [
      `Hello D.T.A. — Delhi Teaching Academy, I would like to enquire about admission.`,
      `Student name: ${g('student')}`,
      `Parent/Guardian name: ${g('parent') || 'Not provided'}`,
      `Contact number: ${g('phone')}`,
      `Class / Course: ${g('course')}`,
      `Preferred contact method: ${g('method')}`,
      `Message: ${g('message') || 'None'}`,
    ].join('\n')
  }

  const validate = (f: FormData) => {
    if (!String(f.get('student') ?? '').trim()) return 'Please enter the student’s name.'
    if (!/^[+\d\s-]{10,15}$/.test(String(f.get('phone') ?? '').trim())) return 'Please enter a valid contact number (10 digits or more).'
    if (!String(f.get('course') ?? '')) return 'Please choose a class or course.'
    return ''
  }

  const submit = (e: FormEvent<HTMLFormElement>, mode: 'wa' | 'mail') => {
    e.preventDefault()
    const form = (e.currentTarget as HTMLFormElement)
    const f = new FormData(form)
    const m = validate(f)
    setErr(m)
    if (m) return
    const text = build(f)
    if (mode === 'wa') window.open(waLink(text), '_blank', 'noopener,noreferrer')
    else window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Admission enquiry — D.T.A.')}&body=${encodeURIComponent(text)}`
    setSent(true)
  }

  return (
    <Section id="contact">
      <Heading title="Contact and admission enquiry" intro="Talk to the academy directly, or send your details and we will continue the conversation." />
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal className="min-w-0">
          <div className="space-y-1">
            <Row icon="pin" label="Address" href={MAPS_LINK} ext>{SITE.address}</Row>
            <Row icon="phone" label="Phone" href={`tel:${SITE.phonePrimaryTel}`}>{SITE.phonePrimary}</Row>
            <Row icon="phone" label="Additional phone" href={`tel:${SITE.phoneSecondaryTel}`}>{SITE.phoneSecondary}</Row>
            <Row icon="wa" label="WhatsApp" href={waLink('Hello D.T.A., I would like to know more about the academy.')} ext>{SITE.phonePrimary}</Row>
            <Row icon="mail" label="Email" href={`mailto:${SITE.email}`}>{SITE.email}</Row>
            <Row icon="instagram" label="Instagram" href={INSTAGRAM_LINK} ext>@d.t.a_26</Row>
          </div>
          <div className="mt-6 rounded-2xl bg-navy-900 p-6 text-cream-100">
            <h3 className="text-2xl font-medium">Want to see a class first?</h3>
            <p className="mt-2 text-cream-100/75">Demo classes are available. Message us to arrange one.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a href={waLink(DEMO_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Book a Free Demo Class</a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-line text-cream-100">Open in Google Maps</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <form noValidate onSubmit={(e) => submit(e, 'wa')} className="rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-8" aria-label="Admission enquiry form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="mb-1 block text-sm font-semibold text-navy-900">Student Name *</span><input name="student" autoComplete="name" className="field" /></label>
              <label className="block"><span className="mb-1 block text-sm font-semibold text-navy-900">Parent / Guardian Name</span><input name="parent" className="field" /></label>
              <label className="block"><span className="mb-1 block text-sm font-semibold text-navy-900">Contact Number *</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" /></label>
              <label className="block"><span className="mb-1 block text-sm font-semibold text-navy-900">Class / Course Interested In *</span>
                <select name="course" defaultValue="" className="field"><option value="" disabled>Select…</option>{OPTIONS.map((o) => <option key={o}>{o}</option>)}</select></label>
              <label className="block sm:col-span-2"><span className="mb-1 block text-sm font-semibold text-navy-900">Preferred Contact Method</span>
                <select name="method" defaultValue="WhatsApp" className="field"><option>WhatsApp</option><option>Phone call</option><option>Email</option></select></label>
              <label className="block sm:col-span-2"><span className="mb-1 block text-sm font-semibold text-navy-900">Message</span><textarea name="message" rows={4} className="field" /></label>
            </div>
            <div aria-live="polite" className="mt-4 min-h-6 text-[15px]">
              {err && <p className="font-medium text-red-700" role="alert">{err}</p>}
              {!err && sent && <p className="font-medium text-navy-800">Your message is ready in a new WhatsApp or email window. Please press send there to complete your enquiry.</p>}
            </div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="btn btn-gold flex-1"><Icon name="wa" className="h-5 w-5" /> Send Enquiry on WhatsApp</button>
              <button type="button" className="btn btn-navy flex-1" onClick={(e) => submit({ preventDefault: () => {}, currentTarget: e.currentTarget.form } as unknown as FormEvent<HTMLFormElement>, 'mail')}>Send by Email Instead</button>
            </div>
            <p className="mt-4 text-sm text-navy-800/70">This form does not store your details. It prepares a message that opens in WhatsApp or your email app, and nothing is sent until you press send there.</p>
          </form>
        </Reveal>
      </div>
      <Reveal className="mt-10 min-w-0 overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm">
        <iframe
          title="Google Maps search for D.T.A. — Delhi Teaching Academy, B-44, Amar Vihar, Karawal Nagar, Delhi 110094"
          src={MAPS_EMBED_LINK}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block h-[280px] w-full border-0 sm:h-[360px] lg:h-[420px]"
        />
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="min-w-0 text-sm text-navy-800/80">If the map does not load, <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-900 underline underline-offset-2">open the institute address in Google Maps</a>.</p>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-gold shrink-0">Get Directions</a>
        </div>
      </Reveal>
    </Section>
  )
}
