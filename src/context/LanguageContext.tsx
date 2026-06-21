import { createContext, useContext, useState, ReactNode } from 'react'
import { Lang, translations, Translations } from '../i18n/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('hy')
  const t = translations[lang] as Translations

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div lang={lang === 'hy' ? 'hy' : 'en'}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
