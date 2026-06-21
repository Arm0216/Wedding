import { coupleData } from '../data/weddingData'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-stone-900 text-white/60 py-16 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-30" />

      <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
        <h2 className="font-script text-4xl text-gold/80">
          {coupleData.bride} & {coupleData.groom}
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-sans text-xs tracking-widest uppercase">{coupleData.displayDate}</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-gold/40" />
          <span className="font-sans text-xs tracking-widest uppercase">
            {coupleData.venue}, {coupleData.location}
          </span>
        </div>

        <div className="flex items-center gap-4 w-32">
          <div className="flex-1 h-px bg-gold/20" />
          <svg className="w-3 h-3 text-gold/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
          </svg>
          <div className="flex-1 h-px bg-gold/20" />
        </div>

        <p className="font-serif italic text-white/40 text-sm max-w-sm leading-relaxed">{t.footer.quote}</p>
        <p className="font-sans text-xs text-white/25 tracking-widest uppercase">{t.footer.verse}</p>
        <p className="font-sans text-xs text-white/25 mt-4">{t.footer.madeWith} · {coupleData.displayDate}</p>
      </div>
    </footer>
  )
}
