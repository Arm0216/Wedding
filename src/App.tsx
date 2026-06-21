import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import Gallery from './components/Gallery'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import { useLang } from './context/LanguageContext'

function LoadingScreen({ done }: { done: boolean }) {
  const { t } = useLang()
  return (
    <div
      className={`fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center gap-6 transition-all duration-1000 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-2 rounded-full border border-gold/30 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
        <span className="font-script text-3xl text-gold animate-pulse-soft">A & N</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/50 animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted/60">{t.loading}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <LoadingScreen done={loaded} />
      <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <main>
          <Hero />
          <LoveLetter />
          <Gallery />
          <Timeline />
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </>
  )
}
