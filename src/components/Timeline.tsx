import { useLang } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type TimelineEvent = {
  time: string
  title: string
  subtitle: string
  icon: string
}

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const { ref, visible } = useScrollAnimation(0.15)
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-0 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 160}ms` }}
    >
      {/* LEFT SIDE */}
      <div className={`w-5/12 ${isLeft ? 'flex justify-end pr-8' : ''}`}>
        {isLeft && <Card event={event} isLeft />}
      </div>

      {/* CENTER NODE */}
      <div className="w-2/12 flex flex-col items-center relative z-10">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-gold"
          style={{
            background: 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #A0822A 100%)',
            boxShadow: '0 0 0 4px #FBF6EF, 0 0 0 6px rgba(201,168,76,0.3), 0 8px 24px rgba(201,168,76,0.3)',
          }}
        >
          <span>{event.icon}</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={`w-5/12 ${!isLeft ? 'flex justify-start pl-8' : ''}`}>
        {!isLeft && <Card event={event} isLeft={false} />}
      </div>
    </div>
  )
}

function Card({ event, isLeft }: { event: TimelineEvent; isLeft: boolean }) {
  return (
    <div
      className={`relative group w-full max-w-xs rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1`}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(251,246,239,0.9) 100%)',
        boxShadow: '0 4px 24px rgba(139,115,85,0.12), 0 1px 0 rgba(201,168,76,0.2)',
        border: '1px solid rgba(201,168,76,0.2)',
      }}
    >
      {/* Gold accent bar */}
      <div
        className={`absolute top-0 bottom-0 w-1 bg-gold-gradient ${isLeft ? 'right-0' : 'left-0'}`}
      />

      <div className={`px-6 py-5 ${isLeft ? 'text-right pr-7' : 'text-left pl-7'}`}>
        {/* Time */}
        <div
          className={`inline-flex items-center gap-2 mb-3 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <div
            className="px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-widest text-white"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #A0822A)' }}
          >
            {event.time}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-semibold text-stone-800 leading-snug mb-1">
          {event.title}
        </h3>

        {/* Subtitle */}
        {event.subtitle && (
          <p className="font-sans text-xs tracking-wide text-gold-dark opacity-80">
            {event.subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

export default function Timeline() {
  const { ref, visible } = useScrollAnimation()
  const { t } = useLang()

  return (
    <section
      id="timeline"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FBF6EF 0%, #F7E7CE 55%, #FBF6EF 100%)' }}
    >
      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-3">
            {t.timeline.label}
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-gold-dark mb-4">
            {t.timeline.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/40" />
            <svg className="w-4 h-4 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <div className="w-16 h-px bg-gold/40" />
          </div>
          <p className="font-serif italic text-muted mt-4">{t.timeline.subtitle}</p>
        </div>

        {/* Timeline — desktop */}
        <div className="hidden md:block relative">
          {/* Vertical gold line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, #C9A84C 8%, #C9A84C 92%, transparent)',
            }}
          />

          <div className="flex flex-col gap-10">
            {t.timeline.items.map((event, i) => (
              <TimelineCard key={event.title} event={event} index={i} />
            ))}
          </div>
        </div>

        {/* Timeline — mobile */}
        <div className="md:hidden relative pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, transparent, #C9A84C 5%, #C9A84C 95%, transparent)',
            }}
          />

          <div className="flex flex-col gap-6">
            {t.timeline.items.map((event, i) => (
              <MobileCard key={event.title} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileCard({ event, index }: { event: TimelineEvent; index: number }) {
  const { ref, visible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Node on the line */}
      <div
        className="absolute -left-10 top-5 w-8 h-8 rounded-full flex items-center justify-center text-sm z-10"
        style={{
          background: 'linear-gradient(135deg, #C9A84C, #A0822A)',
          boxShadow: '0 0 0 3px #FBF6EF, 0 0 0 5px rgba(201,168,76,0.3)',
        }}
      >
        <span>{event.icon}</span>
      </div>

      {/* Card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(251,246,239,0.95))',
          boxShadow: '0 4px 20px rgba(139,115,85,0.1)',
          border: '1px solid rgba(201,168,76,0.2)',
        }}
      >
        <div className="w-1 absolute left-0 top-0 bottom-0 bg-gold-gradient rounded-l-2xl" />
        <div className="px-5 py-4 pl-6">
          <div
            className="inline-flex px-3 py-0.5 rounded-full font-sans text-xs font-semibold tracking-widest text-white mb-2"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #A0822A)' }}
          >
            {event.time}
          </div>
          <h3 className="font-serif text-lg font-semibold text-stone-800">{event.title}</h3>
          {event.subtitle && (
            <p className="font-sans text-xs text-gold-dark opacity-80 mt-0.5">{event.subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}
