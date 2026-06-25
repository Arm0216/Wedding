import { useLang } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WEDDING_DAY = 1
const WEDDING_MONTH = 7 // 0-indexed = August
const WEDDING_YEAR = 2026

const EN_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const HY_MONTHS = ['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս','Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր']
const EN_DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const HY_DAYS = ['Կր','Երկ','Եր','Չոր','Հնգ','Ուր','Շբ']

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export default function WeddingCalendar() {
  const { ref, visible } = useScrollAnimation(0.1)
  const { lang, t } = useLang()

  const months = lang === 'hy' ? HY_MONTHS : EN_MONTHS
  const dayLabels = lang === 'hy' ? HY_DAYS : EN_DAYS
  const monthName = months[WEDDING_MONTH]

  const daysInMonth = getDaysInMonth(WEDDING_YEAR, WEDDING_MONTH)
  const firstDay = getFirstDayOfMonth(WEDDING_YEAR, WEDDING_MONTH)

  // Build calendar grid
  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <section
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FBF6EF 0%, #F2E4CE 50%, #FBF6EF 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blush/10 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-sm mx-auto transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-3">
            {lang === 'hy' ? 'Պահպանեք ամսաթիվը' : 'Save the Date'}
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-gold-dark mb-4">
            {lang === 'hy' ? 'Հարսանիքի Օրը' : 'Wedding Day'}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/40" />
            <svg className="w-4 h-4 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
            </svg>
            <div className="w-16 h-px bg-gold/40" />
          </div>
        </div>

        {/* Calendar card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 8px 40px rgba(139,115,85,0.18), 0 2px 0 rgba(201,168,76,0.2)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          {/* Calendar header */}
          <div
            className="px-6 py-5 text-center relative"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #A0822A 100%)' }}
          >
            {/* Decorative corner lines */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-white/30" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-white/30" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-white/30" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-white/30" />

            <p className="font-sans text-white/80 text-xs tracking-[0.3em] uppercase mb-1">{WEDDING_YEAR}</p>
            <h3 className="font-script text-4xl text-white drop-shadow">{monthName}</h3>
          </div>

          {/* Day labels */}
          <div
            className="grid grid-cols-7 px-4 pt-4 pb-2"
            style={{ background: 'rgba(251,246,239,0.95)' }}
          >
            {dayLabels.map((d) => (
              <div key={d} className="text-center font-sans text-xs tracking-widest uppercase text-gold/60 pb-2">
                {d}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-4 h-px bg-gold/15" />

          {/* Days grid */}
          <div
            className="grid grid-cols-7 gap-y-1 px-4 py-4"
            style={{ background: 'rgba(251,246,239,0.95)' }}
          >
            {cells.map((day, i) => {
              const isWedding = day === WEDDING_DAY
              const isSunday = i % 7 === 0

              if (!day) return <div key={`empty-${i}`} />

              if (isWedding) {
                return (
                  <div key={day} className="flex items-center justify-center py-0.5">
                    <div className="relative flex flex-col items-center">
                      {/* Pulsing ring */}
                      <div
                        className="absolute inset-0 rounded-full animate-ping opacity-30"
                        style={{ background: 'rgba(201,168,76,0.4)', animationDuration: '2s' }}
                      />
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                        style={{
                          background: 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #A0822A 100%)',
                          boxShadow: '0 4px 16px rgba(201,168,76,0.5)',
                        }}
                      >
                        <span className="font-serif text-white font-semibold text-sm">{day}</span>
                      </div>
                      {/* Heart below */}
                      <span className="text-[10px] mt-0.5 leading-none">💍</span>
                    </div>
                  </div>
                )
              }

              return (
                <div key={day} className="flex items-center justify-center py-0.5">
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-sans text-sm transition-colors
                      ${isSunday ? 'text-red-400/70' : 'text-stone-500'}
                    `}
                  >
                    {day}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Bottom tag */}
          <div
            className="px-6 py-4 flex items-center justify-center gap-3"
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(232,213,163,0.12))',
              borderTop: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            <div className="h-px flex-1 bg-gold/20" />
            <p className="font-serif italic text-xs text-gold-dark/80 tracking-wide text-center">
              {lang === 'hy'
                ? `Օգոստոս ${WEDDING_DAY}, ${WEDDING_YEAR} · Granada Hall`
                : `August ${WEDDING_DAY}, ${WEDDING_YEAR} · Granada Hall`}
            </p>
            <div className="h-px flex-1 bg-gold/20" />
          </div>
        </div>

        {/* Countdown chip below */}
        <div className="mt-8 flex justify-center">
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase text-white"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #A0822A)', boxShadow: '0 4px 16px rgba(201,168,76,0.35)' }}
          >
            <span>✦</span>
            <span>{lang === 'hy' ? 'Հաշվեք Օրերը' : 'Count the Days'}</span>
            <span>✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}
