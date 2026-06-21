import { coupleData } from '../data/weddingData'
import { useLang } from '../context/LanguageContext'
import Countdown from './Countdown'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blurred backdrop to fill empty space */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'blur(18px)', opacity: 0.6 }}
          src="/images/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />
        {/* Crisp video — natural size, centered */}
        <video
          className="absolute inset-0 w-full h-full object-contain"
          src="/images/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Corner flourishes */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/50 opacity-70" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-gold/50 opacity-70" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-gold/50 opacity-70" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/50 opacity-70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6 animate-fade-in">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-light opacity-90">
          {t.hero.preTitle}
        </p>

        <div className="flex items-center gap-4 w-48">
          <div className="flex-1 h-px bg-gold/40" />
          <svg className="w-4 h-4 text-gold/70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <div className="flex-1 h-px bg-gold/40" />
        </div>

        <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-white leading-none drop-shadow-lg animate-fade-up">
          {coupleData.bride} & {coupleData.groom}
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-white/80 tracking-wide">
          {t.hero.tagline}
        </p>

        <div className="w-full max-w-md flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-6">
            <span className="font-sans text-sm tracking-widest uppercase text-champagne/90">
              {coupleData.displayDate}
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span className="font-sans text-sm tracking-widest uppercase text-champagne/90 text-center">
              {coupleData.venue}, {coupleData.location}
            </span>
          </div>
          <div className="w-24 h-px bg-gold/40" />
          <Countdown />
        </div>

        <button
          onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors group"
          aria-label="Scroll down"
        >
          <span className="font-sans text-xs tracking-widest uppercase">{t.hero.explore}</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center pt-2 group-hover:border-white/60 transition-colors">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  )
}
