import { useEffect, useState } from 'react'
import { coupleData } from '../data/weddingData'
import { useLang } from '../context/LanguageContext'

export default function Navigation() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: t.nav.story, href: '#story' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.timeline, href: '#timeline' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const textColor = scrolled ? 'text-muted' : 'text-white/90'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md shadow-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className={`font-script text-2xl transition-colors duration-500 ${
            scrolled ? 'text-gold' : 'text-white'
          }`}
        >
          {coupleData.bride} & {coupleData.groom}
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className={`font-sans text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold ${textColor}`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <LangToggle lang={lang} setLang={setLang} scrolled={scrolled} />
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-4">
          <LangToggle lang={lang} setLang={setLang} scrolled={scrolled} />
          <button
            className={`flex flex-col gap-1.5 ${scrolled ? 'text-muted' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-72' : 'max-h-0'}`}>
        <div className="bg-ivory/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-sans text-sm tracking-widest uppercase text-muted hover:text-gold text-left transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function LangToggle({
  lang,
  setLang,
  scrolled,
}: {
  lang: 'en' | 'hy'
  setLang: (l: 'en' | 'hy') => void
  scrolled: boolean
}) {
  return (
    <div
      className={`flex items-center rounded-full p-0.5 border transition-colors duration-500 ${
        scrolled ? 'border-gold/30 bg-champagne/50' : 'border-white/25 bg-white/10'
      }`}
    >
      {(['en', 'hy'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
            lang === l
              ? 'bg-gold text-white shadow-sm'
              : scrolled
              ? 'text-muted hover:text-gold'
              : 'text-white/70 hover:text-white'
          }`}
        >
          {l === 'en' ? 'EN' : 'ՀՅ'}
        </button>
      ))}
    </div>
  )
}
