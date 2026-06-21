import { coupleData } from '../data/weddingData'
import { useLang } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function StoryCard({ item, index }: { item: { year: string; title: string; text: string }; index: number }) {
  const { ref, visible } = useScrollAnimation()
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`flex-none ${isLeft ? 'md:order-1' : 'md:order-3'}`}>
        <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
          <span className="font-serif text-white text-sm font-semibold tracking-wide">{item.year}</span>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center order-2 flex-none">
        <div className="w-px h-16 bg-gold/20" />
        <div className="w-2 h-2 rounded-full bg-gold/50" />
        <div className="w-px h-16 bg-gold/20" />
      </div>

      <div
        className={`flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-gold/10 ${
          isLeft ? 'md:order-3' : 'md:order-1 md:text-right'
        }`}
      >
        <h3 className="font-serif text-xl font-medium text-gold-dark mb-2">{item.title}</h3>
        <p className="font-sans text-muted text-sm leading-relaxed">{item.text}</p>
      </div>
    </div>
  )
}

export default function OurStory() {
  const { ref, visible } = useScrollAnimation()
  const { t } = useLang()

  return (
    <section id="story" className="py-24 px-6 bg-champagne-gradient">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-3">{t.story.label}</p>
          <h2 className="font-script text-5xl sm:text-6xl text-gold-dark mb-4">{t.story.title}</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/40" />
            <svg className="w-4 h-4 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
            </svg>
            <div className="w-16 h-px bg-gold/40" />
          </div>
          <p className="font-serif italic text-muted mt-4 max-w-md mx-auto leading-relaxed">
            {t.story.subtitle(coupleData.bride, coupleData.groom)}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {t.story.items.map((item, i) => (
            <StoryCard key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
