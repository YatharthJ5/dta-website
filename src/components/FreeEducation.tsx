import Reveal from './Reveal'

const SELECTION_POINTS = [
  'D.T.A. will select one deserving student every month.',
  'The selected student will receive 100% free education.',
  'There is no admission fee.',
  'There is no tuition fee.',
  'Priority will be given to students from financially weak families.',
  'The student must genuinely want to study.',
  'Basic family income details will be verified through a parent or guardian.',
  'Selection will take place every month.',
  'The student’s privacy and dignity will be protected.',
]

export default function FreeEducation() {
  return (
    <section id="free-education" className="relative isolate overflow-hidden bg-navy-950 py-20 text-cream-100 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-32 -z-10 h-80 w-80 rounded-full border border-gold-400/10 sm:h-[32rem] sm:w-[32rem]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold-400">
            D.T.A. FREE EDUCATION INITIATIVE
          </p>
          <h2 className="mt-5 text-4xl font-medium sm:text-5xl lg:text-6xl">One Student Every Month – 100% FREE Education</h2>
          <p className="mt-6 font-display text-2xl text-gold-400 sm:text-3xl">Talent should never stop because of money.</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-10">
          <Reveal className="flex min-w-0 flex-col rounded-3xl border border-gold-400/30 bg-white/[.04] p-7 sm:p-9">
            <p className="font-display text-5xl font-semibold text-gold-400 sm:text-6xl">100%</p>
            <h3 className="mt-2 font-display text-2xl font-medium sm:text-3xl">Free education for one deserving student, every month.</h3>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p lang="hi" className="font-display text-xl leading-relaxed text-cream-100 sm:text-2xl">
                Paison ki kami ab kisi bachche ki padhai nahi rokegi.
              </p>
              <p lang="hi" className="mt-4 text-base leading-relaxed text-cream-100/70">
                Ek bachcha bhi agar padh likh kar apne sapno ko poora kar paata hai, toh hamara prayas safal hai.
              </p>
            </div>
            <a href="#contact" className="btn btn-gold mt-8 self-start">Enquire about free education</a>
          </Reveal>

          <div className="grid min-w-0 gap-3 sm:grid-cols-2">
            {SELECTION_POINTS.map((point, index) => (
              <Reveal key={point} delay={(index % 4) * 70} className="min-w-0">
                <article className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5 transition-colors duration-300 hover:border-gold-400/40 hover:bg-white/[.07]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-400/40 font-semibold text-gold-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1 text-[15px] leading-relaxed text-cream-100/85">{point}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
