import { coupleData } from '../data/weddingData'
import { useLang } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function LoveLetter() {
  const { t } = useLang()
  const l = t.letter
  const { ref: sectionRef, visible: sectionVisible } = useScrollAnimation(0.1)
  const { ref: cardRef, visible: cardVisible } = useScrollAnimation(0.15)

  return (
    <section
      id="story"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FBF6EF 0%, #F7E7CE 55%, #FBF6EF 100%)' }}
    >
      {/* Soft background petals */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-blush/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-champagne/30 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-3">
            {l.label}
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-gold-dark mb-4">{l.title}</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/40" />
            <svg className="w-4 h-4 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
            </svg>
            <div className="w-16 h-px bg-gold/40" />
          </div>
        </div>

        {/* Parchment card */}
        <div
          ref={cardRef}
          className={`relative transition-all duration-1200 ${
            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Card with paper texture effect */}
          <div
            className="animate-float relative rounded-3xl px-8 py-12 sm:px-14 sm:py-16"
            style={{
              background: 'linear-gradient(145deg, #FEFAF2 0%, #FDF6E8 60%, #FAF0DC 100%)',
              boxShadow:
                '0 2px 0 #E8D5A3, 0 4px 0 rgba(201,168,76,0.15), 0 20px 60px rgba(139,115,85,0.18), inset 0 1px 0 rgba(255,255,255,0.8)',
              border: '1px solid rgba(201,168,76,0.25)',
            }}
          >
            {/* Wax seal */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Outer ring */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #A0822A 100%)',
                    boxShadow: '0 4px 16px rgba(201,168,76,0.4), inset 0 1px 2px rgba(255,255,255,0.3)',
                  }}
                >
                  {/* Inner circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #A0822A 0%, #C9A84C 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
                    }}
                  >
                    <span className="font-script text-white text-xl leading-none" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                      {coupleData.bride[0]}&{coupleData.groom[0]}
                    </span>
                  </div>
                </div>
                {/* Seal edge dots */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-1.5 h-1.5 rounded-full bg-gold/50"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${deg}deg) translateY(-42px) translate(-50%, -50%)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Salutation */}
            <p
              className="font-script text-3xl sm:text-4xl text-gold-dark mb-4 transition-all duration-1000"
              style={{
                transitionDelay: '400ms',
                opacity: cardVisible ? 1 : 0,
                transform: cardVisible ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              {l.salutation}
            </p>

            {/* Decorative ruled line */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex-1 h-px bg-gold/20" />
              <div className="w-1 h-1 rounded-full bg-gold/30" />
              <div className="flex-1 h-px bg-gold/20" />
            </div>

            {/* Body paragraphs */}
            <div className="space-y-5 mb-10">
              {l.body.map((para, i) => (
                <p
                  key={i}
                  className="font-serif text-base sm:text-lg text-stone-600 leading-relaxed transition-all duration-1000"
                  style={{
                    transitionDelay: `${600 + i * 200}ms`,
                    opacity: cardVisible ? 1 : 0,
                    transform: cardVisible ? 'translateY(0)' : 'translateY(12px)',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Closing */}
            <div
              className="transition-all duration-1000"
              style={{
                transitionDelay: '1100ms',
                opacity: cardVisible ? 1 : 0,
                transform: cardVisible ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              <p className="font-serif italic text-stone-500 mb-2">{l.closing}</p>

              {/* Signature */}
              <p className="font-script text-4xl sm:text-5xl text-gold-dark">
                {l.signature}
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 my-8">
              <div className="w-12 h-px bg-gold/25" />
              <svg className="w-3 h-3 text-gold/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <svg className="w-2 h-2 text-gold/30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <svg className="w-3 h-3 text-gold/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <div className="w-12 h-px bg-gold/25" />
            </div>

            {/* P.S. */}
            <p
              className="font-serif italic text-sm text-stone-400 text-center transition-all duration-1000"
              style={{
                transitionDelay: '1300ms',
                opacity: cardVisible ? 1 : 0,
                transform: cardVisible ? 'translateY(0)' : 'translateY(8px)',
              }}
            >
              {l.ps}
            </p>
          </div>

          {/* Card shadow layers for depth */}
          <div
            className="absolute inset-x-4 -bottom-2 h-full rounded-3xl -z-10"
            style={{ background: 'rgba(201,168,76,0.08)', filter: 'blur(4px)' }}
          />
          <div
            className="absolute inset-x-8 -bottom-4 h-full rounded-3xl -z-20"
            style={{ background: 'rgba(201,168,76,0.05)', filter: 'blur(8px)' }}
          />
        </div>
      </div>
    </section>
  )
}
