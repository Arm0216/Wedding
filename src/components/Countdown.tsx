import { useEffect, useState } from 'react'
import { coupleData } from '../data/weddingData'
import { useLang } from '../context/LanguageContext'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = new Date(coupleData.date).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative">
        <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-glass">
          <span className="font-serif text-base sm:text-2xl font-light text-white tabular-nums">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="font-sans text-xs tracking-widest uppercase text-white/70">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft())
  const { t } = useLang()
  const c = t.countdown

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const isPast = new Date(coupleData.date).getTime() < Date.now()

  if (isPast) {
    return (
      <p className="font-script text-3xl text-white/90 animate-pulse-soft">
        {c.married}
      </p>
    )
  }

  return (
    <div className="flex items-end gap-2 sm:gap-3">
      <Unit value={time.days} label={c.days} />
      <span className="text-white/60 text-base sm:text-2xl mb-6 sm:mb-8 font-light">:</span>
      <Unit value={time.hours} label={c.hours} />
      <span className="text-white/60 text-base sm:text-2xl mb-6 sm:mb-8 font-light">:</span>
      <Unit value={time.minutes} label={c.mins} />
      <span className="text-white/60 text-base sm:text-2xl mb-6 sm:mb-8 font-light">:</span>
      <Unit value={time.seconds} label={c.secs} />
    </div>
  )
}
