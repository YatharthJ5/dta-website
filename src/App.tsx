import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Courses from './components/Courses'
import Faculty from './components/Faculty'
import Why from './components/Why'
import Environment from './components/Environment'
import Results from './components/Results'
import Admission from './components/Admission'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Icon from './components/Icon'
import { DEMO_MSG, waLink } from './data/site'

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Courses />
        <Faculty />
        <Why />
        <Environment />
        <Results />
        <Admission />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a href={waLink(DEMO_MSG)} target="_blank" rel="noopener noreferrer" aria-label="Chat with D.T.A. on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1f9d55] text-white shadow-lg transition-transform hover:scale-110">
        <Icon name="wa" className="h-7 w-7" />
      </a>
    </>
  )
}
